from rest_framework.permissions import BasePermission

class ApplicationModelPermissions(BasePermission):
    def has_permission(self, request, view):
        """
        Return `True` if permission is granted, `False` otherwise.
        """
        if request.user.is_employer:
                return True
        return False

def has_object_permission(self, request, view, obj):
        """
        Return `True` if permission is granted, `False` otherwise.
        """

        if obj.job_title.company_name.owner == request.user:
            return True
        return False

