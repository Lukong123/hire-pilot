from django.urls import path, include
from rest_framework import routers
from . import views
from .views import UploadViewSet, UploadViews
router = routers.DefaultRouter()
router.register(r"upload", UploadViewSet, basename="upload")
router.register("resume", UploadViews, basename="resume")


urlpatterns = [
    path("", include(router.urls)),
    path("newupload", views.NewUploadViewSet.as_view, name="newupload"),
    # path('newcreate', views., name='newcreate'),
    # path('newlist', views.view_resume, name='newlist'),
    path("apinew", views.ApiOverview, name="home"),
    path("create/", views.add_jobs, name="add-jobs"),
    path("alljobs/", views.view_jobs, name="view-jobs"),
    path("update/<int:pk>/", views.update_jobs, name="update-jobs"),
    path("job/<int:pk>/delete/", views.delete_jobs, name="delete-jobs"),
    path("model/form/upload", views.model_form_upload, name="model"),
    path("upload/", views.UploadViewSet.as_view, name="upload"),
    path("skillseed/", views.skill_seeder, name="skill"),

   
    # Status
    
]
