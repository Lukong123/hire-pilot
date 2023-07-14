from rest_framework import serializers
from rest_framework.serializers import FileField
from .models import *
from django.db.models import fields
from .models import Job, Resume, Employer, Apply



class JobsSerializer(serializers.ModelSerializer):
    # company_name_id = serializers.PrimaryKeyRelatedField(
    #     queryset=Employer.objects.all(),
    # )


    class Meta:
        model = Job
        fields = "__all__"

    def to_representation(self, instance):
        rep = super().to_representation(instance)
        company = instance.company
        rep["company"]={"id": company.id,
                        "company_name": company.company_name}
        return rep
        
class UploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resume
        fields = "__all__"


class NewUploadSerializer(serializers.Serializer):
    model = Resume
    file_uploaded = FileField()

    class Meta:
        fields = ["name", "resume", "file_uploaded"]




class EmployerSerializer(serializers.ModelSerializer):
    username = serializers.CharField(max_length = 10, write_only=True)
    password = serializers.CharField(max_length=30, write_only=True)
    class Meta:
        model = Employer
        fields = (
            "pk",
            "username",
            "password",
            "owner",
            "company_name",
            "email",
            "location",
            "phone",
            "industry_type",
        )
        read_only_fields = ["owner"]
    
    def create(self, validated_data):
        username = validated_data.pop("username")
        password = validated_data.pop("password")
        owner = User.objects.create_user(username=username, password=password, is_employer = True)
        validated_data["owner"]=owner
        return super().create(validated_data)


class CriteriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Selection
        fields = ("job_name", "skill", "degree", "experience", "language", "age")


class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Apply
        fields = (
            "candidate",
            "job",
            "resume",
            "candidate_extracted_data",
            "status",
        )
    
    def to_representation(self, instance):
        rep = super().to_representation(instance)
        candidate = instance.candidate
        rep["candidate"]={"id": candidate.id,
                        "first_name": candidate.first_name}
        return rep
