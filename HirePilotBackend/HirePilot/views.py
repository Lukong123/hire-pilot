from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.response import Response
from rest_framework.viewsets import ViewSet
from rest_framework import viewsets, generics
from django.http import JsonResponse
from rest_framework.views import APIView
import json
from rest_framework.request import Request

from HirePilot.utils.skill_extraction import extract_skills, extract_text_from_pdf, skills_database
from HirePilot.utils.language_extraction import extract_language, known_languages
from HirePilot.utils.degree_extraction import extract_degree, education_degrees
from HirePilot.utils.ranking import calculate_similarity
from HirePilot.utils.phone_number_extraction import extract_mobile_number
from HirePilot.utils.email_extraction import extract_emails 
from HirePilot.utils.bar_chart import plot_similarity_scores
import base64
import io
from django.http import HttpResponse
from django.http import HttpRequest




from .forms import ResumeForm
from .models import Job, Resume,  Employer, Apply
from .serializers import *
from rest_framework import serializers,request,permissions
from rest_framework import status
from django.shortcuts import get_object_or_404, redirect, render
from pdfminer.high_level import extract_text
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.conf import settings
import json
from .permissions import *
import matplotlib.pyplot as plt



@api_view(["GET"])
def ApiOverview(request):
    api_urls = {
        "all_jobs": "/alljobs",
        "Search by Category": "/?category=category_name",
        "Add": "/create",
        "Update": "/update/pk",
        "Delete": "/item/pk/delete",
    }

    return Response(api_urls)


@api_view(["POST"])
def add_jobs(request):
    job = JobsSerializer(data=request.data)

    if Job.objects.filter(**request.data).exists():
        raise serializers.ValidationError("This data already exists")

    if job.is_valid():
        job.save()
        return Response(job.data)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)


@api_view(["GET"])
def view_jobs(request):
    if request.query_params:
        jobs = Job.objects.filter(**request.query_params.dict())
    else:
        jobs = Job.objects.all()

    if jobs:
        serializer = JobsSerializer(jobs, many=True)
        return Response(serializer.data)

    else:
        return Response(status=status.HTTP_404_NOT_FOUND)


@api_view(["POST"])
def update_jobs(request, pk):
    job = Job.objects.get(pk=pk)
    data = JobsSerializer(instance=job, data=request.data)

    if data.is_valid():
        data.save()
        return Response(data.data)

    else:
        return Response(status=status.HTTP_404_NOT_FOUND)


@api_view(["DELETE"])
def delete_jobs(request, pk):
    job = get_object_or_404(Job, pk=pk)
    job.delete()
    return Response(status=status.HTTP_202_ACCEPTED)


# uploading resume
def model_form_upload(request):
    if request.method == "POST":
        form = ResumeForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect("home")
    else:
        form = ResumeForm()
    return render(request, "model_form_upload.html", {"form": form})


# ViewSets define the view behavior.
class UploadViewSet(ViewSet):
    serializer_class = UploadSerializer

    def list(self, request):
        return Response("GET API")

    def create(self, request):
        file_uploaded = request.FILES.get("file_uploaded")
        content_type = file_uploaded.content_type
        response = "POST API and you have uploaded a {} file".format(content_type)
        return Response(response)


class NewUploadViewSet(ViewSet):
    serializer_class = NewUploadSerializer

    def list(self, request):
        return Response("GET API")

    def create(self, request):
        file_uploaded = request.FILES.get("file_uploaded")
        content_type = file_uploaded.content_type
        response = "POST API and you have uploaded a {} file".format(content_type)
        return Response(response)


class UploadViews(viewsets.ModelViewSet):
    serializer_class = UploadSerializer
    queryset = Resume.objects.all()

class EmployerViewset(ModelViewSet):
    permission_classes = [AllowAny]
    queryset = Employer.objects.all()
    serializer_class = EmployerSerializer

class JobViewset(ModelViewSet):
    # permission_classes = [IsAuthenticated]
    queryset = Job.objects.all()
    serializer_class = JobsSerializer

    def get_queryset(self):
        user = self.request.user
        print(user)
        if user is not None and user.is_employer:
            print("done")
            company = Employer.objects.get(owner=user)
            queryset = Job.objects.filter(company_id=company.id)
            return queryset
        else:
            return Job.objects.all()
    
    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            permission_classes = [permissions.AllowAny]
        
        elif self.action  == 'create':
            permission_classes = [IsEmployer]
        else:
            permission_classes = [permissions.IsAuthenticated]
        
        return [permission() for permission in permission_classes]
    

    def create(self, request:Request, *args, **kwargs):
        
        data = request.data

        skills = data.pop('skills')
        languages= data.pop('language')
        degrees = data.pop('degree')

        # extract skills, languages and degrees which
        # have are not in db and save them in db

        unregistered_skills = {skill for skill in skills if not str(skill).isnumeric()}
        unregistered_languages = {language for language in languages if not str(language).isnumeric()}
        unregistered_degrees = {degree for degree in degrees if not str(degree).isnumeric()}

        registered_skills = list(set(skills).difference(unregistered_skills))
        registered_languages = list (set(languages).difference(unregistered_languages))
        registered_degrees =  list(set(degrees).difference(unregistered_degrees))


        for skill in unregistered_skills:
           new_skill = Skills(name=skill)
           new_skill.save()
           registered_skills.append(new_skill.id)
        
        for language in unregistered_languages:
           new_language = Language(name=language)
           new_language.save()
           registered_languages.append(new_language.id)
        
        for degree in unregistered_degrees:
            new_degree = Degree(name=degree)
            new_degree.save()
            registered_degrees.append(new_degree.id)
        
        # set updated skills, degrees and languages in post data before passing to serializer

        data['skills'] = sorted(registered_skills)
        data['degree'] = sorted(registered_degrees)
        data['language'] = sorted(registered_languages)

        serializer = JobsSerializer(data=data)

        serializer.is_valid(raise_exception=True)

        serializer.save()

        return Response(serializer.data, status=201)


    

# Apply

class ApplyViewset(ModelViewSet):
    permission_classes = [IsAuthenticated]
    # permission_classes = [AllowAny]

    queryset = Apply.objects.all()
    serializer_class = ApplicationSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        data = serializer.data
        filename = data.get("resume").split("/")[-1]
        if filename.split(".")[-1] != 'pdf':
            print("error loading")
            return Response({"error": "wrong file format", "status": "400"})
        else:
            file_path = f"{settings.MEDIA_ROOT}Candidates/Documents/{filename}"
        text = extract_text_from_pdf(file_path)
       
        skills = extract_skills(text)
        languages = extract_language(text)
        degree = extract_degree(text)
        emails = extract_emails(text)
        phone = extract_mobile_number(text)

        keys = ['degree', 'language', 'skills']
        candidate_values = [degree, languages, skills]


        candidate_vector = {keys[i]: candidate_values[i] for i in range(len(keys))}
        print(candidate_vector)

        data = data.pop("resume")
        objs = Apply.objects.filter(
            candidate=request.data.get("candidate"),
            job=request.data.get("job"),
        )
        if objs.exists():
            obj = objs.first()
            obj.candidate_extracted_data = json.dumps(
                {
                    "skills": list(skills),
                    "language": list(languages),
                    "degree": list(degree),
                    "emails": list(emails),
                    # "phone": list(phone),
                    "phone": list(phone) if phone is not None else None,
                    "location": None,
                }
            )
            obj.save()
        headers = self.get_success_headers(serializer.data)
        return Response(
            serializer.data, status=status.HTTP_201_CREATED, headers=headers
        )
        
    def get_queryset(self):
        user = self.request.user
      
        if user is not None and user.is_employer:
              
            if 'job' in self.request.GET.keys():
                job_id = self.request.GET.get('job')
                queryset = Apply.objects.filter(job_id=int(job_id))
            else:
                company = Employer.objects.get(owner=user)
                queryset = Apply.objects.filter(job__company_id=company.id)
            
            return queryset
        else:
            return Apply.objects.all()

    def get_permissions(self):

        if self.action in ('retrieve', 'list', 'delete'):
            permission_classes = [IsJobApplicant | IsApplicationJobOwner]
        
        elif self.action  == 'create':
            permission_classes = [permissions.IsAuthenticated]
        elif self.action in ('update', 'patch'):
            permission_classes = [IsApplicationJobOwner]
    
        else:
            permission_classes = [permissions.IsAuthenticated]
        
        return [permission() for permission in permission_classes]

@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def rank_application(request, pk):

    def get_name(val):
        return val['name']

    if request.method == 'GET':
        job = get_object_or_404(Job, pk=pk)
        job_applications = Apply.objects.filter(job=pk)
        application_vector_list = []

        for applications in job_applications:
            print(type(applications.candidate_extracted_data))
            if applications.candidate_extracted_data is not None:
                extracted_data = json.loads(applications.candidate_extracted_data)

                application_dict = {"application_id":applications.id, "skills": set(extracted_data["skills"]),"language": set(extracted_data["language"]), "degree": set(extracted_data["degree"]),}
              
                application_vector_list.append(application_dict)
        
        recruiter_vector = {"degree":set(map(get_name, job.degree.values())),"skills":set(map(get_name, job.skills.values())), "language":set(map(get_name, job.language.values()))}
        scores = calculate_similarity(application_vector_list, recruiter_vector)
        sorted_scores = sorted(scores, key=lambda x: x[1], reverse=True)
        
        result = []
        rank = 1
        prev_score = None
        for i, score in enumerate(sorted_scores):
            application_id = score[0]
            phone = extracted_data["phone"]
            emails = extracted_data["emails"]
            applicant_name = Apply.objects.get(id=application_id).candidate.username
            similarity_score = score[1]
            rank = rank if prev_score == similarity_score else i + 1
            prev_score = similarity_score
            result.append({"rank": rank, "application_id": application_id, "applicant_name": applicant_name, "emails":emails,"phone":phone, "similarity_score": similarity_score})
        
        return Response(result)        
@api_view(['GET'])
def skill_seeder(request):
    for skill in skills_database:
        s = Skills(name=skill)
        s.save()
    return Response("success")

@api_view(['GET'])
def language_seeder(request):
    for language in known_languages:
        l = Language(name=language)
        l.save()
    return Response("success")

@api_view(['GET'])
def degree_seeder(request):
    for degree in education_degrees:
        s = Degree(name=degree)
        s.save()
    return Response("success")

@api_view(['GET','POST'])
def skill_list(request):
    if request.method == 'GET':
        
        search_key = request.GET.get("searchkey")
        if search_key is None or len(search_key.rstrip()) == 0:
            return Response([])
        else:
          filtered_skills =  Skills.objects.filter(name__icontains=search_key) 
          serializer = SkillSerializer(filtered_skills, many=True)
          return Response(serializer.data) 
    
    elif request.method == 'POST':
        data = request.data
        serializer = SkillSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

    
@api_view(['GET','POST'])
def degree_list(request):
    if request.method == 'GET':
        
        search_key = request.GET.get("searchkey")
        if search_key is None or len(search_key.rstrip()) == 0:
            return Response([])
        else:
          filtered_degree =  Degree.objects.filter(name__icontains=search_key) 
          serializer = DegreeSerializer(filtered_degree, many=True)
          return Response(serializer.data) 
    
    elif request.method == 'POST':
        data = request.data
        serializer = DegreeSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

@api_view(['GET','POST'])
def language_list(request):
    if request.method == 'GET':
        
        search_key = request.GET.get("searchkey")
        if search_key is None or len(search_key.rstrip()) == 0:
            return Response([])
        else:
          filtered_language =  Language.objects.filter(name__icontains=search_key) 
          serializer = LanguageSerializer(filtered_language, many=True)
          return Response(serializer.data) 
    
    elif request.method == 'POST':
        data = request.data
        serializer = LanguageSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()


            
@api_view(['GET'])
def get_similarity_scores(request):

  # get results
  results = [
      {'applicant_name': 'John Doe', 'similarity_score': 0.85},
    {'applicant_name': 'Jane Smith', 'similarity_score': 0.65},
    {'applicant_name': 'Bob Johnson', 'similarity_score': 0.55}
  ] # populate this
  
  similarity_scores = []
  candidate_names = []

  for result in results:
    candidate_names.append(result['applicant_name']) 
    similarity_scores.append(result['similarity_score'])

  # generate plot
  fig = plot_similarity_scores(candidate_names, similarity_scores)
  
  # save plot as image
  img_file = io.BytesIO()
  fig.savefig(img_file, format='png')
  img_file.seek(0)
  img_data = base64.b64encode(img_file.read())

  return HttpResponse(img_data, content_type='image/png')