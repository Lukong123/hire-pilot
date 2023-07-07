from rest_framework.routers import DefaultRouter

from HirePilot import views

router = DefaultRouter()

router.register('apply', views.ApplyViewset)
# router.register('status', views.StatusViewset)


urlpatterns = router.urls