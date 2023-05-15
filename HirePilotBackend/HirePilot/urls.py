from django.urls import path
from . import views


urlpatterns = [
    path('apinew', views.ApiOverview, name='home')
]