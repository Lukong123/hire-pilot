from django.contrib import admin
from django.contrib.auth import get_user_model
from .models import *

# # Register your models here.


UserProfile = get_user_model()

admin.site.register(Resume)
admin.site.register(Candidate)
admin.site.register(Employer)
admin.site.register(Job)
admin.site.register(Apply)
admin.site.register(Selection)
admin.site.register(Status)
