from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.viewsets import ViewSet
from rest_framework import viewsets
from django.http import JsonResponse
from rest_framework.views import APIView

from HirePilot.utils.skill_extraction import extract_skills, extract_text_from_pdf
from HirePilot.utils.language_extraction import extract_language
from HirePilot.utils.degree_extraction import extract_degree
from .forms import ResumeForm
from .models import Job, Resume, Candidate, Employer, Selection, Apply
from .serializers import *
from rest_framework import serializers
from rest_framework import status
from django.shortcuts import get_object_or_404, redirect, render
from pdfminer.high_level import extract_text
from rest_framework.viewsets import ModelViewSet
from django.conf import settings
import json
@api_view(['GET'])
def ApiOverview(request):
    api_urls = {
        'all_jobs': '/alljobs',
        'Search by Category': '/?category=category_name',
        'Add': '/create',
        'Update': '/update/pk',
        'Delete': '/item/pk/delete'
    }

    return Response(api_urls)

@api_view(['POST'])
def add_jobs(request):
    job = JobsSerializer(data=request.data)

    if Job.objects.filter(**request.data).exists():
        raise serializers.ValidationError('This data already exists')
    
    if job.is_valid():
        job.save()
        return Response(job.data)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)
    

@api_view(['GET'])
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
    

@api_view(['POST'])
def update_jobs(request, pk):
    job = Job.objects.get(pk=pk)
    data = JobsSerializer(instance=job, data=request.data)

    if data.is_valid():
        data.save()
        return Response(data.data)
    
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
@api_view(['DELETE'])
def delete_jobs(request, pk):
    job = get_object_or_404(Job, pk=pk)
    job.delete()
    return Response(status=status.HTTP_202_ACCEPTED)

# uploading resume
def model_form_upload(request):
    if request.method == 'POST':
        form = ResumeForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form = ResumeForm()
    return render(request, 'model_form_upload.html', {
        'form': form
    })

# ViewSets define the view behavior.
class UploadViewSet(ViewSet):
    serializer_class = UploadSerializer

    def list(self, request):
        return Response("GET API")

    def create(self, request):
        file_uploaded = request.FILES.get('file_uploaded')
        content_type = file_uploaded.content_type
        response = "POST API and you have uploaded a {} file".format(content_type)
        return Response(response)
    
class NewUploadViewSet(ViewSet):
    serializer_class = NewUploadSerializer

    def list(self, request):
        return Response("GET API")

    def create(self, request):
        file_uploaded = request.FILES.get('file_uploaded')
        content_type = file_uploaded.content_type
        response = "POST API and you have uploaded a {} file".format(content_type)
        return Response(response)

class UploadViews(viewsets.ModelViewSet):
    serializer_class = UploadSerializer
    queryset = Resume.objects.all()


# Canidate

@api_view(['POST'])
def add_candidate(request):
    candidate = CandidateSerializer(data=request.data)

    if Candidate.objects.filter(**request.data).exists():
        raise serializers.ValidationError('This data already exists')
    
    if candidate.is_valid():
        candidate.save()
        return Response(candidate.data)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)
    

@api_view(['GET'])
def view_candidate(request):
    if request.query_params:
        candidate = Candidate.objects.filter(**request.query_params.dict())
    else:
        candidate = Candidate.objects.all()
    

    if candidate:
        serializer = CandidateSerializer(candidate, many=True)
        return Response(serializer.data)
    
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)
    

@api_view(['POST'])
def update_candidate(request, pk):
    candidate = Candidate.objects.get(pk=pk)
    data = CandidateSerializer(instance=candidate, data=request.data)

    if data.is_valid():
        data.save()
        return Response(data.data)
    
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
@api_view(['DELETE'])
def delete_candidate(request, pk):
    candidate = get_object_or_404(Candidate, pk=pk)
    candidate.delete()
    return Response(status=status.HTTP_202_ACCEPTED)


# Employer
@api_view(['POST'])
def add_employer(request):
    employer = EmployerSerializer(data=request.data)

    if Employer.objects.filter(**request.data).exists():
        raise serializers.ValidationError('This data already exists')
    
    if employer.is_valid():
        employer.save()
        return Response(employer.data)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)
    

@api_view(['GET'])
def view_employer(request):
    if request.query_params:
        employer = Employer.objects.filter(**request.query_params.dict())
    else:
        employer = Employer.objects.all()
    

    if employer:
        serializer = EmployerSerializer(employer, many=True)
        return Response(serializer.data)
    
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)
    

@api_view(['POST'])
def update_employer(request, pk):
    employer = Employer.objects.get(pk=pk)
    data = EmployerSerializer(instance=employer, data=request.data)

    if data.is_valid():
        data.save()
        return Response(data.data)
    
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
@api_view(['DELETE'])
def delete_employer(request, pk):
    employer = get_object_or_404(Employer, pk=pk)
    employer.delete()
    return Response(status=status.HTTP_202_ACCEPTED)

# Criteria

@api_view(['POST'])
def add_criteria(request):
    criteria = CriteriaSerializer(data=request.data)

    if Selection.objects.filter(**request.data).exists():
        raise serializers.ValidationError('This data already exists')
    
    if criteria.is_valid():
        criteria.save()
        return Response(criteria.data)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)
    

@api_view(['GET'])
def view_criteria(request):
    if request.query_params:
        criteria = Selection.objects.filter(**request.query_params.dict())
    else:
        criteria = Selection.objects.all()
    

    if criteria:
        serializer = CriteriaSerializer(criteria, many=True)
        return Response(serializer.data)
    
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)
    

@api_view(['POST'])
def update_criteria(request, pk):
    criteria = Selection.objects.get(pk=pk)
    data = CriteriaSerializer(instance=criteria, data=request.data)

    if data.is_valid():
        data.save()
        return Response(data.data)
    
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
@api_view(['DELETE'])
def delete_criteria(request, pk):
    criteria = get_object_or_404(Selection, pk=pk)
    criteria.delete()
    return Response(status=status.HTTP_202_ACCEPTED)

# Application View
@api_view(['POST'])
def add_application(request):

    print(request.data)
    
    application = ApplicationSerializer(data=request.data)

    
    if application.is_valid():
        application.save()
        text = extract_text_from_pdf(request.data.get('resume'))
        skills = extract_skills(text)
        print(skills)
        return Response(application.data)
    else:
        return Response(status=status.HTTP_406_NOT_ACCEPTABLE)
    

@api_view(['GET'])
def view_application(request):
    if request.query_params:
        application = Apply.objects.filter(**request.query_params.dict())
    else:
        application = Apply.objects.all()
    

    if application:
        serializer = ApplicationSerializer(application, many=True)
        return Response(serializer.data)
    
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)
    

@api_view(['POST'])
def update_application(request, pk):
    application = Apply.objects.get(pk=pk)
    data = ApplicationSerializer(instance=application, data=request.data)

    if data.is_valid():
        data.save()
        return Response(data.data)
    
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
@api_view(['DELETE'])
def delete_application(request, pk):
    application = get_object_or_404(Apply, pk=pk)
    application.delete()
    return Response(status=status.HTTP_202_ACCEPTED)


class ExtractSkillsView(APIView):
    def post(self, request):
        pdf_file = request.FILES.get('file')
        if pdf_file:
            resume_text = extract_text(pdf_file)
            EMAIL_REG = re.compile(r'[a-z0-9\.\-+_]+@[a-z0-9\.\-+_]+\.[a-z]+')
            mymails= re.findall(EMAIL_REG, resume_text )
            # skills_list = extract_emails(resume_text)a
            
            return JsonResponse({'mails': mymails})
        else:
            return JsonResponse({'error': 'No PDF file provided.'}, status=400)



class ApplyViewset(ModelViewSet):
    queryset = Apply.objects.all()
    serializer_class = ApplicationSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        # print(request.data)
        # file = request.data.get('resume')
        
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        data = serializer.data
        filename = data.get('resume').split('/')[-1]
        # print(filename)
        file_path = f'{settings.MEDIA_ROOT}Candidates/Documents/{filename}'
        text = extract_text_from_pdf(file_path)
        # if text:
        #     print('text has been extracted')
        # else:    
        #     print('text not ')
        skills = extract_skills(text)
        languages = extract_language(text)
        degree = extract_degree(text)
        # print(skills)
        data = data.pop('resume')
        objs = Apply.objects.filter(candidate_name= request.data.get('candidate_name'), job_name = request.data.get('job_name')) 
        if objs.exists():
            obj = objs.first()
            obj.candidate_extracted_data = json.dumps({'skills': list(skills), 'language': list(languages), 'degree': list(degree), 'location': None})
            obj.save()
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
    
# Status that works
class StatusViewset(ModelViewSet):
    queryset = Status.objects.all()
    serializer_class = StatusSerializer


    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        
        
        objs = Status.objects.filter(candidates_name= request.data.get('candidates_name'), 
                                     companys_name = request.data.get('companys_name'), 
                                     jobs_name = request.data.get('jobs_name'),
                                     status = request.data.get('status')) 
        if objs.exists():
            obj = objs.first()
            obj.save()
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


# Status
@api_view(['POST'])
def add_status(request):
    status= StatusSerializer(data=request.data)

    if Status.objects.filter(**request.data).exists():
        raise serializers.ValidationError('This data already exists')
    
    if status.is_valid():
        status.save()
        return Response(status.data)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)
    

@api_view(['GET'])
def view_status(request):
    if request.query_params:
        status = Status.objects.filter(**request.query_params.dict())
    else:
        status = Status.objects.all()
    

    if status:
        serializer = StatusSerializer(status, many=True)
        return Response(serializer.data)
    
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)
    

@api_view(['POST'])
def update_status(request, pk):
    status = Status.objects.get(pk=pk)
    data = StatusSerializer(instance=status, data=request.data)

    if data.is_valid():
        data.save()
        return Response(data.data)
    
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
@api_view(['DELETE'])
def delete_status(request, pk):
    status= get_object_or_404(Status, pk=pk)
    status.delete()
    return Response(status=status.HTTP_202_ACCEPTED)

