from django.shortcuts import get_object_or_404
from django.http import Http404
from django.db import transaction


from applicants.models import Applicant
from recruiters.models import JobPost, Application, Applied , Answer,Question

from recruiters import serializers as Recruiter_serializers
from applicants import serializers as Applicant_serializers

from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from rest_framework import mixins
from rest_framework import permissions
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

import core.Utils as Utils
# Create your views here.


# register Applicant 
class RegisterApplicant(generics.CreateAPIView):
    queryset = Applicant.objects.all()
    serializer_class = Applicant_serializers.ApplicantSerializer
    authentication_classes = []

# create Applicant 
class GetCreateApplicant(generics.CreateAPIView,generics.ListAPIView):
    queryset = Applicant.objects.all()
    serializer_class = Applicant_serializers.ApplicantSerializer
    authentication_classes = [TokenAuthentication]
    authentication_classes = []


# apply for a posted job
class ApplyJob__ERROR(generics.CreateAPIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    
    def post(self, request, *args, **kwargs):
        user = request.user
        job_id = self.kwargs.get('job_id')
        data = request.data.copy()
        
        applicant = get_object_or_404(Applicant,pk=data['user_id'])
        try:
            job = get_object_or_404(JobPost,id=job_id)
        except JobPost.DoesNotExist:
            raise Http404("Job does not exist")

        applied = Applied.objects.filter(applicant=applicant, jobPost=job)
        if applied.exists():
            return Response({"message": "You have already applied for this job"}, status=status.HTTP_400_BAD_REQUEST)
        else:
            if job.is_application:
                application = data.get('application')

                if application:
                    # questions for the application 
                    questions = Question.objects.filter(application=job.application)
                    ids = list(questions.values_list('id', flat=True))
                    with transaction.atomic():
                        applied = Applied.objects.create(applicant=applicant, jobPost=job)
                        for question_id, answer in application.items():
                            if int(question_id) in ids:
                                question = get_object_or_404(Question, id=question_id)
                                answer = Answer.objects.create(question=question,answer=answer,applied=applied)
                            else:
                                return Response({"message": "Invalid ID Question"}, status=status.HTTP_400_BAD_REQUEST)
                else:
                    return Response({"message": "Application is required"}, status=status.HTTP_400_BAD_REQUEST)
            else:
                Applied.objects.create(applicant=applicant, jobPost=job)
                
            response_data = Utils.generate_response_with_token(user)
            response_data.update({"message": "Applied successfully"})
            return Response(response_data, status=status.HTTP_201_CREATED)
    

class ApplyJob(generics.CreateAPIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    
    def post(self, request, *args, **kwargs):
        user = request.user
        job_id = self.kwargs.get('job_id')
        data = request.data.copy()
        
        applicant = get_object_or_404(Applicant, pk=data['user_id'])
        
        try:
            job = get_object_or_404(JobPost, id=job_id)
        except JobPost.DoesNotExist:
            raise Http404("Job does not exist")

        applied = Applied.objects.filter(applicant=applicant, jobPost=job)
        if applied.exists():
            return Response({"message": "You have already applied for this job"}, status=status.HTTP_400_BAD_REQUEST)

        if job.is_application:
            application = data.get('application')
            
            if not application:
                return Response({"message": "Application is required"}, status=status.HTTP_400_BAD_REQUEST)

            questions = Question.objects.filter(application=job.application)
            ids = list(questions.values_list('id', flat=True))
            
            for question_id in application.keys():
                if int(question_id) not in ids:
                    return Response({"message": "Invalid question ID"}, status=status.HTTP_400_BAD_REQUEST)

            with transaction.atomic():
                applied = Applied.objects.create(applicant=applicant, jobPost=job)
                
                for question_id, answer in application.items():
                    question = get_object_or_404(Question, id=question_id)
                    Answer.objects.create(question=question, answer=answer, applied=applied)
        else:
            Applied.objects.create(applicant=applicant, jobPost=job)

        response_data = Utils.generate_response_with_token(user)
        response_data.update({"message": "Applied successfully"})
        return Response(response_data, status=status.HTTP_201_CREATED)

# show all the jobs
class ShowJobs(generics.ListAPIView, mixins.RetrieveModelMixin):
    queryset = JobPost.objects.all()
    serializer_class = Recruiter_serializers.JobPostSerializer


# show all applied jobs
class ShowAppliedJobs(generics.ListAPIView, mixins.RetrieveModelMixin):
    authentication_classes = [TokenAuthentication]
    queryset = Applied.objects.all()
    serializer_class = Recruiter_serializers.AppliedSerializer

    def get(self, request, *args, **kwargs):
        applicant = get_object_or_404(Applicant,pk=request.data.get('user_id'))
        applied_jobs = self.filter_queryset(self.get_queryset().filter(applicant=applicant))
        serializer = self.get_serializer(applied_jobs, many=True)
        response_data = Utils.generate_response_with_token(request.user, {"applied_jobs": serializer.data})
        return Response(response_data, status=status.HTTP_200_OK)
