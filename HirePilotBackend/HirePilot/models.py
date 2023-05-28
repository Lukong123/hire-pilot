from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin, AbstractUser
from django.contrib.auth import get_user_model
from django.utils import timezone
# # Create your models here.



class UserProfileManager(BaseUserManager):

    def create_user(self, email, username, password=None):
        if not email:
            raise ValueError('Users must have an email address')
        user = self.model(email=self.normalize_email(email),
                username=username,
        )
        user.set_password(password)
        user.save(using=self._db)
     
        return user
    def create_staffuser(self, email,username, password=None):
        user = self.create_user(email,
                password=password,
                username=username
        )
        user.is_staff = True
        user.save(using=self._db)
        
        return user
    def create_superuser(self, email, username, password=None):
        user = self.create_user(email,
                password=password,
                username=username
        )
        user.is_staff = True
        user.is_admin = True
        user.save(using=self._db)
        
        return user

class UserProfile(AbstractBaseUser):
     email = models.EmailField(verbose_name='email address',
             max_length=255,unique=True,
             )
     username = models.CharField(('username'),
              max_length=150,
              unique=True,
              error_messages={
   'unique':("A user with that username already      exists."),
       },
    )
     is_active = models.BooleanField(default=True)
     is_staff = models.BooleanField(default=False)
     is_admin = models.BooleanField(default=False)
     
     USERNAME_FIELD = 'username'
     REQUIRED_FIELDS = ['email',]
     objects = UserProfileManager()

     def get_full_name(self):
         return self.email
     

     def get_short_name(self):
          return self.email
     
     def __str__(self):
          return self.email
     
     def has_perm(self, perm, obj=None):
          return True
     
     def has_module_perms(self, app_label):
          return True


class Jobs(models.Model):

    Full_time= 'Full Time'
    Part_time = 'Part Time'

    fulltime_parttime = [
        (Full_time, 'Full Time'),
        (Part_time, 'Part Time'),
       ]

    Offline= 'Offline'
    Remote = 'Remote'

    offlineorremote = [
        (Offline, 'Offline'),
        (Remote, 'Remote'),
       ]



    title = models.CharField(max_length=30)
    category = models.CharField(max_length=30)
    location = models.CharField(max_length=30)
    fulltime_partime = models.CharField(max_length=10, choices=fulltime_parttime, default=Full_time)
    offline_remote = models.CharField(max_length=7, choices=offlineorremote, default=Offline)
    submission_deadline = models.DateField(max_length=30)
    selection_step = models.PositiveIntegerField()
    salary_range = models.CharField(max_length=30)
    description = models.CharField(max_length=100)
    date_created = models.DateField('date created', default=timezone.now)

    def __str__(self):
        return self.title
    
 


class Resume(models.Model):
    name = models.CharField(max_length= 20)
    resume = models.FileField(upload_to='Candidates/Documents')
    uploaded_at = models.DateTimeField(auto_now=True)


class Criteria(models.Model):
    job_name = models.ForeignKey(Jobs, on_delete=models.CASCADE)
    skill = models.CharField(max_length=200)
    degree = models.CharField(max_length=200)
    experience = models.CharField(max_length=200)
    language = models.CharField(max_length=200)
    age = models.CharField(max_length=200)


class User(AbstractUser):
    class Role(models.TextChoices):
        ADMIN = "ADMIN", 'Admin'
        EMPLOYER = "EMPLOYER", 'Employer'
        CANDIDATE = "CANDIDATE", 'Candidate'
    
    base_role = Role.ADMIN
    role = models.CharField(max_length=50, choices=Role.choices)
    
    
# class User(AbstractUser):
#     class Role(models.TextChoices):
#         ADMIN = "ADMIN", 'Admin'
#         EMPLOYER = "EMPLOYER", 'Employer'
#         CANDIDATE = "CANDIDATE", 'Candidate'

#     base_role = Role.ADMIN

#     role = models.CharField(max_length=50, choices=Role.choices)

#     def save(self, *arg, **kwargs):
#         if not self.pk:
#             self.role = self.base_role
#             return super().save(*args, **kwargs)
