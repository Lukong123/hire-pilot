from django.urls import path
from account.views import UserRegistrationView, UserLoginView

urlpatterns = [
    path('api/register/', UserRegistrationView.as_view(), name='user_registration'),
    path('api/login/', UserLoginView.as_view(), name='user_login'),
]