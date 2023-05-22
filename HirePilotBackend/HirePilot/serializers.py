from rest_framework import serializers
from rest_framework.serializers import FileField 
from .models import *
from django.db.models import fields
from .models import Jobs, Resume

class JobsSerializer(serializers.ModelSerializer):
	class Meta:
		model = Jobs
		fields = ( 
			'pk',
			'title',
			'category',
			'location',
			'fulltime_partime',
			'offline_remote',
			'submission_deadline',
			'selection_step',
			'salary_range','description',
			'date_created' )


class UploadSerializer(serializers.Serializer):
    model = Resume
    file_uploaded = FileField()
    class Meta:
        fields = [
             'name',
             'resume',
             'file_uploaded'
                ]

class NewUploadSerializer(serializers.Serializer):
    model = Resume
    file_uploaded = FileField()
    class Meta:
        fields = [
             'name',
             'resume',
             'file_uploaded'
                ]



