from rest_framework import serializers

from .models import *
from django.db.models import fields
from rest_framework import serializers
from .models import Jobs

class JobsSerializer(serializers.ModelSerializer):
	class Meta:
		model = Jobs
		fields = ( 
			'title',
			'category',
			'location',
			'fulltime_partime',
			'offline_remote',
			'submission_deadline',
			'selection_step',
			'salary_range','description',
			'date_created' )



# class JobSeekerSerializer(serializers.ModelSerializer):

#     class Meta:
#         model = JobSeeker
#         fields = ('first_name', 'last_name', 'email', 'location', 'phone')