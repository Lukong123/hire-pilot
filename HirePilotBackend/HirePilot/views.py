# # from rest_framework.decorators import api_view
# from rest_framework.response import Response
# # from rest_framework.viewsets import ViewSet
# from rest_framework import viewsets

# from .forms import ResumeForm
# from .models import Jobs, Resume
# from .serializers import JobsSerializer, UploadSerializer, NewUploadSerializer
# from rest_framework import serializers
# from rest_framework import status
# from django.shortcuts import get_object_or_404, redirect, render

# # @api_view(['GET'])
# def ApiOverview(request):
#     api_urls = {
#         'all_jobs': '/alljobs',
#         'Search by Category': '/?category=category_name',
#         'Add': '/create',
#         'Update': '/update/pk',
#         'Delete': '/item/pk/delete'
#     }

#     return Response(api_urls)

# # @api_view(['POST'])
# def add_jobs(request):
#     job = JobsSerializer(data=request.data)

#     if Jobs.objects.filter(**request.data).exists():
#         raise serializers.ValidationError('This data already exists')
    
#     if job.is_valid():
#         job.save()
#         return Response(job.data)
#     else:
#         return Response(status=status.HTTP_404_NOT_FOUND)
    

# # @api_view(['GET'])
# def view_jobs(request):
#     if request.query_params:
#         jobs = Jobs.objects.filter(**request.query_params.dict())
#     else:
#         jobs = Jobs.objects.all()
    

#     if jobs:
#         serializer = JobsSerializer(jobs, many=True)
#         return Response(serializer.data)
    
#     else:
#         return Response(status=status.HTTP_404_NOT_FOUND)
    

# # @api_view(['POST'])
# def update_jobs(request, pk):
#     job = Jobs.objects.get(pk=pk)
#     data = JobsSerializer(instance=job, data=request.data)

#     if data.is_valid():
#         data.save()
#         return Response(data.data)
    
#     else:
#         return Response(status=status.HTTP_404_NOT_FOUND)
    
# # @api_view(['DELETE'])
# def delete_jobs(request, pk):
#     job = get_object_or_404(Jobs, pk=pk)
#     job.delete()
#     return Response(status=status.HTTP_202_ACCEPTED)

# # uploading resume
# def model_form_upload(request):
#     if request.method == 'POST':
#         form = ResumeForm(request.POST, request.FILES)
#         if form.is_valid():
#             form.save()
#             return redirect('home')
#     else:
#         form = ResumeForm()
#     return render(request, 'model_form_upload.html', {
#         'form': form
#     })

# # ViewSets define the view behavior.
# # class UploadViewSet(ViewSet):
#     serializer_class = UploadSerializer

#     def list(self, request):
#         return Response("GET API")

#     def create(self, request):
#         file_uploaded = request.FILES.get('file_uploaded')
#         content_type = file_uploaded.content_type
#         response = "POST API and you have uploaded a {} file".format(content_type)
#         return Response(response)
    
# class NewUploadViewSet(ViewSet):
#     serializer_class = NewUploadSerializer

#     def list(self, request):
#         return Response("GET API")

#     def create(self, request):
#         file_uploaded = request.FILES.get('file_uploaded')
#         content_type = file_uploaded.content_type
#         response = "POST API and you have uploaded a {} file".format(content_type)
#         return Response(response)

# class UploadViews(viewsets.ModelViewSet):
#     serializer_class = UploadSerializer
#     queryset = Resume.objects.all()