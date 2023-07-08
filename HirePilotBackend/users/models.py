# from django.db import models

# from django.contrib.auth.models import AbstractUser, BaseUserManager
# from django.db.models.signals import post_save
# from django.dispatch import receiver

# class User(AbstractUser):
#     class Role(models.TextChoices):
#         ADMIN = "ADMIN", "Admin"
#         CANDIDATE = "CANDIDATE", "Candidate"
#         EMPLOYER = "EMPLOYER", "Employer"

#     base_role = Role.ADMIN

#     role = models.CharField(max_length=50, choices=Role.choices)

#     def save(self, *args, **kwargs):
#         if not self.pk:
#             self.role = self.base_role
#             return super().save(*args, **kwargs)


# class CandidateManager(BaseUserManager):
#     def get_queryset(self, *args, **kwargs):
#         results = super().get_queryset(*args, **kwargs)
#         return results.filter(role=User.Role.CANDIDATE)


# class Candidate(User):
#     base_role = User.Role.CANDIDATE
#     candidate = CandidateManager()

#     class Meta:
#         proxy = True

#     def welcome(self):
#         return "Only for Candidates"


# @receiver(post_save, sender=Candidate)
# def create_user_profile(sender, instance, created, **kwargs):
#     if created and instance.role == "CANDIDATE":
#         CandidateProfile.object.create(user=instance)

# class CandidateProfile(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)


# class EmployerManager(BaseUserManager):
#     def get_queryset(self, *args, **kwargs):
#         results = super().get_queryset(*args, **kwargs)
#         return results.filter(role=User.Role.EMPLOYER)


# class Employer(User):
#     base_role = User.Role.EMPLOYER
#     employer = EmployerManager()

#     class Meta:
#         proxy = True

#     def welcome(self):
#         return "Only for Employer"

# class EmployerProfile(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)

# @receiver(post_save, sender=Employer)
# def create_user_profile(sender, instance, created, **kwargs):
#     if created and instance.role == "EMPLOYER":
#         EmployerProfile.object.create(user=instance)
