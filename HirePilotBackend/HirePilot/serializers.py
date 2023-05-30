from rest_framework import serializers
from rest_framework.serializers import FileField 
from .models import *
from django.db.models import fields
from .models import Jobs, Resume, Candidate, Employer, Criteria, Apply

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
			'salary_range','description','skills','latest_date'
			'date_created' )


class UploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resume
        fields = "__all__"

class NewUploadSerializer(serializers.Serializer):
    model = Resume
    file_uploaded = FileField()
    class Meta:
        fields = [
             'name',
             'resume',
             'file_uploaded'
                ]



class CandidateSerializer(serializers.ModelSerializer):
     class Meta:
          model = Candidate
          fields = (
               'pk',
               'first_name',
               'last_name',
               'email'
		  )


class EmployerSerializer(serializers.ModelSerializer):
      class Meta:
            model = Employer
            fields = (
                  'pk',
                  'company_name',
              	  'email',
                  'location',
                  'phone',
                  'industry_type',
			)


class CriteriaSerializer(serializers.ModelSerializer):
     class Meta:
          model = Criteria
          fields = (
               'job_name',
               'skill',
               'degree',
               'experience',
               'language',
               'age'
          )

class ApplicationSerializer(serializers.ModelSerializer):
     class Meta:
          model = Apply
          fields =(
               
               'candidate_name',
               'job_name',
               'resume'
          )