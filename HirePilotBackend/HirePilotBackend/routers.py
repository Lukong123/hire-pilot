from rest_framework.routers import DefaultRouter

from HirePilot import views

router = DefaultRouter()

router.register("apply", views.ApplyViewset)
router.register("employer", views.EmployerViewset)



urlpatterns = router.urls
