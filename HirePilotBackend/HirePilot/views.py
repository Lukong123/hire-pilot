from django.shortcuts import render
from rest_framework import viewsets
from .serializers import JobSeekerSerializer
from .models import JobSeeker

# Create your views here.

class JobsSeekerview(viewsets.ModelViewSet):
    serializer_class = JobSeekerSerializer
    queryset = JobSeeker.objects.all()