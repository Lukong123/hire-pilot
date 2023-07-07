
from django.contrib import admin
from django.urls import path, include
from django.conf import settings

from django.conf.urls.static import static



urlpatterns = [
    path('HirePilot/', include('HirePilot.urls')),
    path('admin/', admin.site.urls),
    # path('auth/', include('djoser.urls')),
    # path('auth/', include('djoser.urls.jwt')),
    path('api/v1/', include('HirePilotBackend.routers')),

]

urlpatterns+=static(settings.MEDIA_URL,

document_root=settings.MEDIA_ROOT)