from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Jobs
from .serializers import JobsSerializer

@api_view(['GET'])
def ApiOverview(request):
    api_urls = {
        'all_jobs': '/',
        'Search by Category': '/?category=category_name',
        'Add': '/create',
        'Update': '/update/pk',
        'Delete': '/item/pk/delete'
    }

    return Response(api_urls)