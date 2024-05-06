from django.shortcuts import get_object_or_404

from rest_framework.response import Response
from rest_framework import status
from django.http import Http404

from applicants.models import Applicant
from recruiters.models import JobPost, Application, Applied

from recruiters import serializers as Recruiter_serializers
from applicants import serializers as Applicant_serializers

from rest_framework import generics
from rest_framework import mixins
from rest_framework import permissions
# Create your views here.



# create Applicant 
class CreateApplicant(generics.CreateAPIView):
    serializer_class = Applicant_serializers.ApplicantSerializer

# apply for a posted job
class ApplyJob(generics.CreateAPIView):
    queryset = JobPost.objects.all()
    serializer_class = Recruiter_serializers.JobPostSerializer

    def post(self, request, *args, **kwargs):
        job_id = self.kwargs.get('job_id')
        try:
            job = get_object_or_404(JobPost,id=job_id)
        except JobPost.DoesNotExist:
            raise Http404("Job does not exist")
        
        applicant = get_object_or_404(Applicant,pk=request.data.get('user_id'))
        applied = Applied.objects.create(applicant=applicant,recruiter=job.recruiter)
        applied.save()
        return Response({"message": "Applied successfully"}, status=status.HTTP_201_CREATED)
    
# show all the jobs
class ShowJobs(generics.ListAPIView, mixins.RetrieveModelMixin):
    queryset = JobPost.objects.all()
    serializer_class = Recruiter_serializers.JobPostSerializer


# show all applied jobs
class ShowAppliedJobs(generics.ListAPIView, mixins.RetrieveModelMixin):
    queryset = Applied.objects.all()
    serializer_class = Recruiter_serializers.AppliedSerializer

    def get(self, request, *args, **kwargs):
        applicant = get_object_or_404(Applicant,pk=request.data.get('user_id'))
        applied_jobs = self.filter_queryset(self.get_queryset().filter(applicant=applicant))
        serializer = self.get_serializer(applied_jobs, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
# show all applicants
class ShowApplicants(generics.ListAPIView, mixins.RetrieveModelMixin):
    queryset = Applicant.objects.all()
    serializer_class = Applicant_serializers.ApplicantSerializer
