from django.urls import path, include
from rest_framework import routers
from . import views
from .views import UploadViewSet, UploadViews

router = routers.DefaultRouter()
router.register(r'upload', UploadViewSet, basename="upload")
router.register('resume', UploadViews, basename='resume')


urlpatterns = [
    path('', include(router.urls)),
    path('newupload', views.NewUploadViewSet.as_view, name='newupload'),
    # path('newcreate', views., name='newcreate'),
    # path('newlist', views.view_resume, name='newlist'),


    path('apinew', views.ApiOverview, name='home'),
    path('create/', views.add_jobs, name='add-jobs'),
    path('alljobs/', views.view_jobs, name='view-jobs'),
    path('update/<int:pk>/', views.update_jobs, name='update-jobs'),
    path('job/<int:pk>/delete/', views.delete_jobs, name='delete-jobs'),
    path('model/form/upload', views.model_form_upload, name='model'),
    path('upload/', views.UploadViewSet.as_view, name='upload'),

    # path for candidate
    path('candidate/create/', views.add_candidate, name='new-candidate'),
    path('candidate/view/', views.view_candidate, name='view-candidate'),
    path('candidate/update/<int:pk>/',views.update_candidate, name='update-candidate'),
    path('candidate/<int:pk>/delete/', views.delete_candidate, name='delete-candidate'),

    # path for employer

    path('criteria/create/', views.add_criteria, name='new-criteria'),
    path('criteria/view/', views.view_criteria, name='view-criteria'),
    path('criteria/update/<int:pk>/',views.update_criteria, name='update-criteria'),
    path('criteria/<int:pk>/delete/', views.delete_criteria, name='delete-criteria'),

    # path for criteria
    path('employer/create/', views.add_employer, name='new-employer'),
    path('employer/view/', views.view_employer, name='view-employer'),
    path('employer/update/<int:pk>/',views.update_employer, name='update-employer'),
    path('employer/<int:pk>/delete/', views.delete_employer, name='delete-employer'),

    # Path for application
    path('application/create/', views.add_application, name='new-application'),
    path('application/view/', views.view_application, name='view-application'),
    path('application/update/<int:pk>/',views.update_application, name='update-application'),
    path('application/<int:pk>/delete/', views.delete_application, name='delete-application'),




]