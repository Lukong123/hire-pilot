from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.viewsets import ViewSet
from rest_framework import viewsets

from .forms import ResumeForm
from .models import Jobs, Resume, Candidate, Employer, Criteria, Application
from .serializers import *
from rest_framework import serializers
from rest_framework import status
from django.shortcuts import get_object_or_404, redirect, render

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

    if Jobs.objects.filter(**request.data).exists():
        raise serializers.ValidationError('This data already exists')
    
    if job.is_valid():
        job.save()
        return Response(job.data)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)
    

@api_view(['GET'])
def view_jobs(request):
    if request.query_params:
        jobs = Jobs.objects.filter(**request.query_params.dict())
    else:
        jobs = Jobs.objects.all()
    

    if jobs:
        serializer = JobsSerializer(jobs, many=True)
        return Response(serializer.data)
    
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)
    

@api_view(['POST'])
def update_jobs(request, pk):
    job = Jobs.objects.get(pk=pk)
    data = JobsSerializer(instance=job, data=request.data)

    if data.is_valid():
        data.save()
        return Response(data.data)
    
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
@api_view(['DELETE'])
def delete_jobs(request, pk):
    job = get_object_or_404(Jobs, pk=pk)
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
    candidate = get_object_or_404(Jobs, pk=pk)
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

    if Criteria.objects.filter(**request.data).exists():
        raise serializers.ValidationError('This data already exists')
    
    if criteria.is_valid():
        criteria.save()
        return Response(criteria.data)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)
    

@api_view(['GET'])
def view_criteria(request):
    if request.query_params:
        criteria = Criteria.objects.filter(**request.query_params.dict())
    else:
        criteria = Criteria.objects.all()
    

    if criteria:
        serializer = CriteriaSerializer(criteria, many=True)
        return Response(serializer.data)
    
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)
    

@api_view(['POST'])
def update_criteria(request, pk):
    criteria = Criteria.objects.get(pk=pk)
    data = CriteriaSerializer(instance=criteria, data=request.data)

    if data.is_valid():
        data.save()
        return Response(data.data)
    
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
@api_view(['DELETE'])
def delete_criteria(request, pk):
    criteria = get_object_or_404(Criteria, pk=pk)
    criteria.delete()
    return Response(status=status.HTTP_202_ACCEPTED)

# Application View
@api_view(['POST'])
def add_application(request):
    application = ApplicationSerializer(data=request.data)

    if application.objects.filter(**request.data).exists():
        raise serializers.ValidationError('This data already exists')
    
    if application.is_valid():
        application.save()
        return Response(application.data)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)
    

@api_view(['GET'])
def view_application(request):
    if request.query_params:
        application = Application.objects.filter(**request.query_params.dict())
    else:
        application = Application.objects.all()
    

    if application:
        serializer = ApplicationSerializer(application, many=True)
        return Response(serializer.data)
    
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)
    

@api_view(['POST'])
def update_application(request, pk):
    application = Application.objects.get(pk=pk)
    data = ApplicationSerializer(instance=application, data=request.data)

    if data.is_valid():
        data.save()
        return Response(data.data)
    
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
@api_view(['DELETE'])
def delete_application(request, pk):
    application = get_object_or_404(Application, pk=pk)
    application.delete()
    return Response(status=status.HTTP_202_ACCEPTED)



