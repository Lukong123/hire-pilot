from django.urls import path
from . import views


urlpatterns = [
    path('apinew', views.ApiOverview, name='home'),
    path('create/', views.add_jobs, name='add-jobs'),
    path('alljobs/', views.view_jobs, name='view-jobs'),
    path('update/<int:pk>/', views.update_jobs, name='update-jobs'),
     path('job/<int:pk>/delete/', views.delete_jobs, name='delete-jobs'),
     

]