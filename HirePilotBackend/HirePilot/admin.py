from django.contrib import admin

# # Register your models here.
# from .models import *

# from django.contrib import admin
# from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

# from .models import User
# from .forms import UserCreationForm, UserChangeForm


# class UserAdmin(BaseUserAdmin):
#     form = UserChangeForm
#     add_form = UserCreationForm

#     list_display = ('email', 'name', 'location', 'is_staff',  'is_superuser')
#     list_filter = ('is_superuser',)

#     fieldsets = (
#         (None, {'fields': ('email', 'is_staff', 'is_superuser', 'password')}),
#         ('Personal info', {'fields': ('name', 'location', 'picture')}),
#         ('Groups', {'fields': ('groups',)}),
#         ('Permissions', {'fields': ('user_permissions',)}),
#     )
#     add_fieldsets = (
#         (None, {'fields': ('email', 'is_staff', 'is_superuser', 'password1', 'password2')}),
#         ('Personal info', {'fields': ('name', 'location', 'picture')}),
#         ('Groups', {'fields': ('groups',)}),
#         ('Permissions', {'fields': ('user_permissions',)}),
#     )

#     search_fields = ('email', 'name', 'location')
#     ordering = ('email',)
#     filter_horizontal = ()


# admin.site.register(User, UserAdmin)

# admin.site.register(JobSeeker)



from django.contrib.auth import get_user_model
UserProfile = get_user_model()
admin.site.register(UserProfile)


