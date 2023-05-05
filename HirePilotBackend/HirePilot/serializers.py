from rest_framework import serializers

from .models import *



class JobSeekerSerializer(serializers.ModelSerializer):

    class Meta:
        model = JobSeeker
        fields = ('first_name', 'last_name', 'email', 'location', 'phone')