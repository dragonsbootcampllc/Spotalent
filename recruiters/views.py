from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from recruiters.models import Recruiter, Question, Category, JobPost, Applied,Interview
from recruiters import serializers
from rest_framework import generics
from rest_framework import generics, mixins

# Create your views here.

#create rectuiter 
class CreateRecruiter(generics.GenericAPIView, mixins.CreateModelMixin):
    serializer_class = serializers.RecruiterSerializer

    def post(self, request):
        return self.create(request)

# post a job 
class PostJob(generics.GenericAPIView, mixins.CreateModelMixin):
    serializer_class = serializers.JobPostSerializer

    def post(self, request):
        return self.create(request)


# show all the jobs the recruiter posted
class ShowJobs(generics.GenericAPIView, mixins.ListModelMixin):
    serializer_class = serializers.JobPostSerializer

    def get_queryset(self):
        recruiter = Recruiter.objects.get(user=self.request.data['user_id'])
        return JobPost.objects.filter(recruiter=recruiter)

    def get(self, request):
        return self.list(request)
    

# show all the applicants for a job
class ShowApplicants(generics.GenericAPIView, mixins.ListModelMixin):
    serializer_class = serializers.AppliedSerializer

    def get_queryset(self):
        job_id = self.kwargs['job_id']
        job = JobPost.objects.get(id=job_id)
        return Applied.objects.filter(application=job.application)

    def get(self, request, job_id):
        return self.list(request)
    
# schedule an interview
class ScheduleInterview(generics.GenericAPIView, mixins.CreateModelMixin):
    serializer_class = serializers.InterviewSerializer

    def post(self, request, applied_id):
        recruiter = Recruiter.objects.get(user=request.user)
        applied_job = Applied.objects.get(id=applied_id)
        interview = Interview.objects.create(recruiter=recruiter, applicant=applied_job.applicant, date=request.data['date'])
        interview.save()
        return self.create(request)
    
# approve an applicant
class ApproveApplicant(generics.GenericAPIView, mixins.UpdateModelMixin):
    serializer_class = serializers.AppliedSerializer

    def post(self, request):
        job = JobPost.objects.get(id=request.data['job_id'])
        applied_job = Applied.objects.get(job=job)
        applied_job.approved = True
        applied_job.save()
        return self.update(request, applied_job)
    
# reject an applicant
class RejectApplicant(generics.GenericAPIView, mixins.UpdateModelMixin):
    serializer_class = serializers.AppliedSerializer

    def post(self, request):
        job = JobPost.objects.get(id=request.data['job_id'])
        applied_job = Applied.objects.get(job=job)
        applied_job.approved = False
        applied_job.save()
        return self.update(request, applied_job)
    
# show all the interviews
class ShowInterviews(generics.GenericAPIView, mixins.ListModelMixin):
    serializer_class = serializers.InterviewSerializer

    def get_queryset(self):
        recruiter = Recruiter.objects.get(user=self.request.user)
        return Interview.objects.filter(recruiter=recruiter)

    def get(self, request):
        return self.list(request)
    
# show all the questions
class ShowQuestions(generics.GenericAPIView, mixins.ListModelMixin):
    serializer_class = serializers.QuestionSerializer

    def get_queryset(self):
        recruiter = Recruiter.objects.get(user=self.request.user)
        return Question.objects.filter(application__recruiter=recruiter)

    def get(self, request):
        return self.list(request)
    
#get categories
class GetCategories(generics.GenericAPIView, mixins.ListModelMixin):
    serializer_class = serializers.CategorySerializer

    def get_queryset(self):
        return Category.objects.all()

    def get(self, request):
        return self.list(request)

# add category
class AddCategory(generics.GenericAPIView, mixins.CreateModelMixin):
    serializer_class = serializers.CategorySerializer

    def post(self, request):
        return self.create(request)
