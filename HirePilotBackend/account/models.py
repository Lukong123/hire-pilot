from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):
    is_admin = models.BooleanField('Is admin', default=False)
    is_candidate = models.BooleanField('Is candidate', default=False)
    is_employer = models.BooleanField('Is employer', default=False)
