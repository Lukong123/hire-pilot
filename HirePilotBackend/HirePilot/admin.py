from django.contrib import admin
from django.contrib.auth import get_user_model
from .models import *

# # Register your models here.



UserProfile = get_user_model()
admin.site.register(UserProfile)
admin.site.register(Jobs)


