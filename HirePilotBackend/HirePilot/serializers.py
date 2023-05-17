from rest_framework import serializers

from .models import *
from django.db.models import fields
from rest_framework import serializers
from .models import Jobs

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

