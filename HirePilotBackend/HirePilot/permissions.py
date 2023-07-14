from rest_framework.permissions import BasePermission
from rest_framework import permissions


class IsEmployer(BasePermission):
    def has_permission(self, request, view):
        """
        Return `True` if permission is granted, `False` otherwise.
        """
        if request.user.is_employer:
                return True
        return False



class IsApplicationJobOwner(BasePermission):
      def has_object_permission(self, request, view, obj):
        
        if request.method in permissions.SAFE_METHODS:
             return True

        if obj.job.company.owner == request.user:
            return True
        return False

class IsJobApplicant(BasePermission):
      def has_object_permission(self, request, view, obj):

        if obj.candidate == request.user:
            return True
        return False