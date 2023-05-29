from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin, AbstractUser
from django.contrib.auth import get_user_model
from django.utils import timezone

# from HirePilotBackend.HirePilot.serializers import EmployerSerializer
# # Create your models here.

# class JobSeeker(models.Model):
# 	first_name = models.CharField(max_length=30)
# 	last_name = models.CharField(max_length=30)
# 	email = models.EmailField(max_length=30)
# 	location = models.CharField(max_length=30)
# 	phone = models.PositiveIntegerField()

# 	# string representation
# 	def __str__(self):

# 		return self.first_name



# class UserManager(BaseUserManager):
# 	use_in_migration = True

# 	def _create_user(self,email, name, location, password, **extra_fields):
# 		values = [name, email, location ]
# 		field_value_map = dict(zip(self.model.REQUIRED_FIELDS, values))
# 		for field_name, value in field_value_map.items():
# 			if not value:
# 				raise ValueError('The {} value must be set'.format(field_name))
# 		email = self.normalize_email(email)
# 		user = self.model(
# 			email = email,
# 			name=name,
# 			location=location,
# 			**extra_fields
# 		)
# 		user.set_password(password)
# 		user.save(using=self._db)
# 		return user
    
# 	def create_user(self, email, name, location, password=None, **extra_fields):
# 		extra_fields.setdefault('is_staff', False)
# 		extra_fields.setdefault('is_superuser', False)
# 		return self._create_user(email, name, location, password, **extra_fields)
    
# 	def create_superuser(self, email, name, location, password=None, **extra_fields):
# 		extra_fields.setdefault('is_staff', True)
# 		extra_fields.setdefault('is_superuser', True)

# 		if extra_fields.get('is_staff') is not True:
# 			raise ValueError('Superuser must have is_staff=True.')
        
# 		if extra_fields.get('is_superuser') is not True:
# 			raise ValueError('Superuser must have is_superser=True.')
        
# 		return self._create_user(email, name, location, password, **extra_fields)
    

# class User(AbstractUser, PermissionsMixin):
# 	email = models.EmailField(unique=True)
# 	name = models.CharField(max_length=150)
# 	location = models.CharField(max_length=150)
# 	picture = models.ImageField(blank=True, null=True)
# 	is_staff = models.BooleanField(default=False)
# 	is_active = models.BooleanField(default=True)
# 	date_joined = models.DateTimeField(default=timezone.now)
# 	last_login = models.DateTimeField(null=True)

# 	objects = UserManager()
# 	USERNAME_FIELD = 'email'
# 	REQUIRED_FIELDS = ['name', 'location']

# 	def get_full_name(self) -> str:
# 		return self.name
    
# 	def get_short_name(self) -> str:
# 		return self.name.split()[0]


# class UserProfileManager(BaseUserManager):

#     def create_user(self, email, username, password=None):
#         if not email:
#             raise ValueError('Users must have an email address')
#         user = self.model(email=self.normalize_email(email),
#                 username=username,
#         )
#         user.set_password(password)
#         user.save(using=self._db)
     
#         return user
#     def create_staffuser(self, email,username, password=None):
#         user = self.create_user(email,
#                 password=password,
#                 username=username
#         )
#         user.is_staff = True
#         user.save(using=self._db)
        
#         return user
#     def create_superuser(self, email, username, password=None):
#         user = self.create_user(email,
#                 password=password,
#                 username=username
#         )
#         user.is_staff = True
#         user.is_admin = True
#         user.save(using=self._db)
        
#         return user

# class UserProfile(AbstractBaseUser):
#      email = models.EmailField(verbose_name='email address',
#              max_length=255,unique=True,
#              )
#      username = models.CharField(('username'),
#               max_length=150,
#               unique=True,
#               error_messages={
#    'unique':("A user with that username already      exists."),
#        },
#     )
#      is_active = models.BooleanField(default=True)
#      is_staff = models.BooleanField(default=False)
#      is_admin = models.BooleanField(default=False)
     
#      USERNAME_FIELD = 'username'
#      REQUIRED_FIELDS = ['email',]
#      objects = UserProfileManager()

#      def get_full_name(self):
#          return self.email
     

#      def get_short_name(self):
#           return self.email
     
#      def __str__(self):
#           return self.email
     
#      def has_perm(self, perm, obj=None):
#           return True
     
#      def has_module_perms(self, app_label):
#           return True



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


    # company_name = models.ForeignKey(Employer, on_delete=models.CASCADE)
    title = models.CharField(max_length=30)
    category = models.CharField(max_length=30)
    location = models.CharField(max_length=30)
    fulltime_partime = models.CharField(max_length=10, choices=fulltime_parttime, default=Full_time)
    offline_remote = models.CharField(max_length=7, choices=offlineorremote, default=Offline)
    submission_deadline = models.DateField(max_length=30)
    selection_step = models.PositiveIntegerField()
    salary_range = models.CharField(max_length=30)
    description = models.CharField(max_length=100)
    skills = models.CharField(max_length=100, null=True)
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


class Candidate(models.Model):
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    email = models.EmailField(max_length=20)
    date_created = models.DateField('date created', default=timezone.now)


    def __str__(self):
        return self.first_name
    

class Employer(models.Model):

    Agriculture = 'Agriculture'
    Engineering = 'Engineering'
    Health_Care = 'Health Care'
    Hospitality_and_Tourism = 'Hospitality and Tourism'
    Aerospace = 'Aerospace'
    Transport_and_Logistics = 'Transport and Logistics'
    Banking_and_Finance = 'Banking and Finance'
    Media_and_Entertainement = 'Media and Entertainment'
    Professional_Services = 'Professional Services'
    Others = 'Others'

    industry_category = [
        (Agriculture, 'Agriculture'),
    (Engineering, 'Engineering'),
    (Health_Care , 'Health Care'),
   ( Hospitality_and_Tourism , 'Hospitality and Tourism'),
   ( Aerospace, 'Aerospace'),
  (  Transport_and_Logistics, 'Transport and Logistics'),
   ( Banking_and_Finance , 'Banking and Finance'),
    (Media_and_Entertainement ,'Media and Entertainment'),
(    Professional_Services, 'Professional Services'),
   ( Others , 'Others')
    ]

    company_name = models.CharField(max_length=20)
    email = models.EmailField(max_length=55)
    location = models.CharField(max_length=20)
    phone = models.PositiveIntegerField()
    industry_type = models.CharField(max_length=25, choices=industry_category, default=Others)
    date_created = models.DateField('date created', default=timezone.now)


    def __str__(self):
        return self.company_name




    
class Application(models.Model):
    job_name = models.ForeignKey(Jobs, on_delete=models.CASCADE)
    candidate_name = models.ForeignKey(Candidate, on_delete=models.CASCADE)
    resume = models.FileField(upload_to='Candidates/Documents')
    apply_date = models.DateField('apply date', default=timezone.now)