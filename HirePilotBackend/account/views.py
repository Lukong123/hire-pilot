from rest_framework import generics
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from .serializers import UserSerializer
from .models import User
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.contrib.auth import get_user_model
from HirePilot.models import Employer
from HirePilot.serializers import EmployerSerializer


class UserRegistrationView(generics.CreateAPIView):
    permission_classes = [AllowAny]
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserLoginView(ObtainAuthToken):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        response = super(UserLoginView, self).post(request, *args, **kwargs)
        token = Token.objects.get(key=response.data['token'])

        user = get_user_model().objects.get(id=token.user_id)
        if user.is_employer:
            emp = Employer.objects.get(owner=user)
            employer_serializer = EmployerSerializer(emp)

            return Response({
                'token': token.key,
            'user': {
                'id': user.id,
                'username': user.username,
                "is_employer": user.is_employer,
                "is_candidate": user.is_candidate
                
                # add other user fields as needed
            },
                'companyinfo': employer_serializer.data
            })

        return Response({
            'token': token.key,
            'user': {
                'id': user.id,
                'username': user.username,
                "is_employer": user.is_employer,
                "is_candidate": user.is_candidate
                
                # add other user fields as needed
            },
            
        })