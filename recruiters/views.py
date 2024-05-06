from django.shortcuts import get_object_or_404

from rest_framework.response import Response
from rest_framework import status
from recruiters.models import Recruiter, Question, Category, JobPost, Applied,Interview
from django.contrib.auth.models import User

from recruiters import serializers
from rest_framework import generics
from rest_framework import generics, mixins

# Create your views here.

#create rectuiter 
class CreateRecruiter(generics.CreateAPIView):
    serializer_class = serializers.RecruiterSerializer

# post a job 
class PostJob(generics.GenericAPIView, mixins.CreateModelMixin):
    serializer_class = serializers.JobPostSerializer

    def post(self, request, *args, **kwargs):
        # Extract recruiter_id from request data
        recruiter_id = request.data.get('recruiter_id')

        # Ensure recruiter_id is not None
        if recruiter_id is None:
            return Response({"recruiter_id": ["This field is required."]}, status=status.HTTP_400_BAD_REQUEST)

        try:
            # Check if the Recruiter with the given ID exists
            recruiter = Recruiter.objects.get(pk=recruiter_id)
        except Recruiter.DoesNotExist:
            return Response({"recruiter_id": ["Recruiter with the given ID does not exist."]}, status=status.HTTP_400_BAD_REQUEST)

        # Assign the recruiter_id to the request data
        request.data['recruiter'] = recruiter_id

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def perform_create(self, serializer):
        serializer.save()




# show all the jobs the recruiter posted
class ShowJobs(generics.GenericAPIView, mixins.ListModelMixin):
    serializer_class = serializers.JobPostSerializer

    def get_queryset(self):
        recruiter = get_object_or_404(Recruiter, pk=self.request.data['recruiter_id'])
        print(recruiter.id)
        return JobPost.objects.filter(recruiter=recruiter)

    def get(self, request):
        return self.list(request)
    

# show all the applicants for a job
class ShowApplicants(generics.GenericAPIView, mixins.ListModelMixin):
    serializer_class = serializers.AppliedSerializer

    def get_queryset(self):
        job_id = self.kwargs['job_id']
        get_object_or_404(JobPost, pk=job_id)
        return Applied.objects.filter(jobPost=job_id)

    def get(self, request, job_id):
        return self.list(request)
    
# schedule an interview
class ScheduleInterview(generics.GenericAPIView, mixins.CreateModelMixin):
    serializer_class = serializers.InterviewSerializer

    def post(self, request, applied_id):
        recruiter = get_object_or_404(Recruiter, pk=self.request.data['recruiter_id'])
        applied_job = get_object_or_404(Applied, pk=applied_id)
        interview = Interview.objects.create(recruiter=recruiter, applicant=applied_job.applicant, date=request.data['date'],jobPost=applied_job)
        interview.save()
        return self.create(request)
    
# approve an applicant
class ApproveApplicant(generics.GenericAPIView, mixins.UpdateModelMixin):
    serializer_class = serializers.AppliedSerializer

    def patch(self, request):
        job = get_object_or_404(Applied, pk=request.data['applied_id'])
        applied_job = Applied.objects.get(job=job)
        applied_job.approved = True
        applied_job.save()
        return self.update(request, applied_job)
    
# reject an applicant
class RejectApplicant(generics.GenericAPIView, mixins.UpdateModelMixin):
    serializer_class = serializers.AppliedSerializer

    def patch(self, request):
        job = get_object_or_404(Applied, pk=request.data['applied_id'])
        applied_job = Applied.objects.get(job=job)
        applied_job.approved = False
        applied_job.save()
        return self.update(request, applied_job)
    
# show all the interviews of job applied to a recruiter
class ShowInterviews(generics.GenericAPIView, mixins.ListModelMixin):
    serializer_class = serializers.InterviewSerializer

    def get_queryset(self):
        recruiter_id = self.request.data.get('recruiter_id')
        job_id = self.kwargs['job_id']
        get_object_or_404(Recruiter, pk=recruiter_id)
        get_object_or_404(JobPost, pk=job_id)
        return Interview.objects.filter(recruiter=recruiter_id, jobPost=job_id)

    def get(self, request, job_id):
        return self.list(request)

    
# show all the questions
class ShowQuestions(generics.GenericAPIView, mixins.ListModelMixin):
    serializer_class = serializers.QuestionSerializer

    def get_queryset(self):
        recruiter = Recruiter.objects.get(user=self.request.user)
        return Question.objects.filter(application__recruiter=recruiter)

    def get(self, request):
        return self.list(request)
    








# CRUD methods

# get all django users
class GetUsers(generics.ListAPIView):
    serializer_class = serializers.UserSerializer
    queryset = User.objects.all()
    
class GetUesr(generics.RetrieveAPIView):
    serializer_class = serializers.UserSerializer
    
    def get(self, request, pk):
        user = User.objects.get(id=pk)
        serializer = self.get_serializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
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
    
# show all recruiters 
class ShowRecruiters(generics.GenericAPIView, mixins.ListModelMixin):
    serializer_class = serializers.RecruiterSerializer

    def get_queryset(self):
        return Recruiter.objects.all()

    def get(self, request):
        return self.list(request)