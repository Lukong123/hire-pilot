from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    user_type = serializers.CharField(max_length=10, default=None,  write_only=True)
    class Meta:
        model = User
        fields = ('username','first_name', 'last_name', 'email', 'password', 'user_type')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(
            username=validated_data['username'],

            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            email=validated_data['email']
        )
        user.set_password(validated_data['password'])
        user_type = validated_data.get('user_type')
        if user_type == "Employer":
            user.is_employer = True
        else:
            user.is_candidate = True
        user.save()
        return user