from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404

from applicants.models import Applicant
from recruiters.models import JobPost, Application, Applied
# Create your views here.

# apply for a posted job
class ApplyJob(APIView):
    def post(self, request, job_id):
        applicant = Applicant.objects.get(user=request.user)
        job = JobPost.objects.get(id=job_id)
        application = Application.objects.get(recruiter=job.recruiter)
        applied = Applied.objects.create(application=application, applicant=applicant)
        applied.save()
        return Response({"message": "Applied successfully"}, status=status.HTTP_201_CREATED)
    
# show all the jobs
class ShowJobs(APIView):
    def get(self, request):
        jobs = JobPost.objects.all()
        data = []
        for job in jobs:
            data.append({"name": job.name, "description": job.description, "candidates_number": job.candidates_number, "category": job.category.name, "active": job.active})
        return Response(data, status=status.HTTP_200_OK)
    
# show all applied jobs
class ShowAppliedJobs(APIView):
    def get(self, request):
        applicant = Applicant.objects.get(user=request.user)
        applied_jobs = Applied.objects.filter(applicant=applicant)
        data = []
        for job in applied_jobs:
            data.append({"job": job.application.job.name, "approved": job.approved})
        return Response(data, status=status.HTTP_200_OK)
    
