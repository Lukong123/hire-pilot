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
from .models import Job, Resume,  Employer, Apply
from .serializers import *
from rest_framework import serializers
from rest_framework import status
from django.shortcuts import get_object_or_404, redirect, render
from pdfminer.high_level import extract_text
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.conf import settings
import json


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
    permission_classes = [AllowAny]
    queryset = Job.objects.all()
    serializer_class = JobsSerializer

    

# Apply

class ApplyViewset(ModelViewSet):
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny]

    queryset = Apply.objects.all()
    serializer_class = ApplicationSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        # print(request.data)
        # file = request.data.get('resume')

        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        data = serializer.data
        filename = data.get("resume").split("/")[-1]
        # print(filename)
        file_path = f"{settings.MEDIA_ROOT}Candidates/Documents/{filename}"
        text = extract_text_from_pdf(file_path)
        # if text:
        #     print('text has been extracted')
        # else:
        #     print('text not ')
        skills = extract_skills(text)
        languages = extract_language(text)
        degree = extract_degree(text)
        # print(skills)
        data = data.pop("resume")
        objs = Apply.objects.filter(
            candidate_name=request.data.get("candidate_name"),
            job_name=request.data.get("job_name"),
        )
        if objs.exists():
            obj = objs.first()
            obj.candidate_extracted_data = json.dumps(
                {
                    "skills": list(skills),
                    "language": list(languages),
                    "degree": list(degree),
                    "location": None,
                }
            )
            obj.save()
        headers = self.get_success_headers(serializer.data)
        return Response(
            serializer.data, status=status.HTTP_201_CREATED, headers=headers
        )
    
    # def get_queryset(self):
    #     if self.request.user.is_employer:
    #         return super().get_queryset().filter(job_name__company_name__owner=self.request.user)
    #     else:
    #         return super().get_queryset().filter(candidate_name=self.request.user)

