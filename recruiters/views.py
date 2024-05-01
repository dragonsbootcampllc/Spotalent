from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404

from recruiters.models import Recruiter, Question, Application, Category, JobPost, Applied,Interview

# Create your views here.

# post a job from the recturiter
class PostJob(APIView):
    def post(self, request):
        recruiter = Recruiter.objects.get(user=request.user)
        category = Category.objects.get(name=request.data['category'])
        application = Application.objects.create(recruiter=recruiter)
        job = JobPost.objects.create(recruiter=recruiter, category=category, name=request.data['name'], description=request.data['description'], candidates_number=request.data['candidates_number'], application=application)
        job.save()
        return Response({"message": "Job posted successfully"}, status=status.HTTP_201_CREATED)
    
# show all the jobs the recruiter posted
class ShowJobs(APIView):
    def get(self, request):
        recruiter = Recruiter.objects.get(user=request.user)
        jobs = JobPost.objects.filter(recruiter=recruiter)
        data = []
        for job in jobs:
            data.append({"name": job.name, "description": job.description, "candidates_number": job.candidates_number, "category": job.category.name, "active": job.active})
        return Response(data, status=status.HTTP_200_OK)
    
# show all the applicants for a job
class ShowApplicants(APIView):
    def get(self, request, job_id):
        job = JobPost.objects.get(id=job_id)
        applicants = Applied.objects.filter(application=job.application)
        data = []
        for applicant in applicants:
            data.append({"applicant": applicant.applicant.user.username, "approved": applicant.approved})
        return Response(data, status=status.HTTP_200_OK)
    
# schedule an interview
class ScheduleInterview(APIView):
    def post(self, request):
        recruiter = Recruiter.objects.get(user=request.user)
        applicant = Applied.objects.get(id=request.data['applicant_id'])
        interview = Interview.objects.create(recruiter=recruiter, applicant=applicant.applicant)
        interview.save()
        return Response({"message": "Interview scheduled successfully"}, status=status.HTTP_201_CREATED)
    
# approve an applicant
class ApproveApplicant(APIView):
    def post(self, request):
        job = JobPost.objects.get(id=request.data['job_id'])
        applicant = Applied.objects.get(id=request.data['applicant_id'])
        applicant.approved = True
        applicant.save()
        return Response({"message": "Applicant approved successfully"}, status=status.HTTP_200_OK)
    
# reject an applicant
class RejectApplicant(APIView):
    def post(self, request):
        job = JobPost.objects.get(id=request.data['job_id'])
        applicant = Applied.objects.get(id=request.data['applicant_id'])
        applicant.approved = False
        applicant.save()
        return Response({"message": "Applicant rejected successfully"}, status=status.HTTP_200_OK)
    
# show all the interviews
class ShowInterviews(APIView):
    def get(self, request):
        recruiter = Recruiter.objects.get(user=request.user)
        interviews = Interview.objects.filter(recruiter=recruiter)
        data = []
        for interview in interviews:
            data.append({"applicant": interview.applicant.user.username, "date": interview.date})
        return Response(data, status=status.HTTP_200_OK)
    
# show all the questions
class ShowQuestions(APIView):
    def get(self, request):
        recruiter = Recruiter.objects.get(user=request.user)
        questions = Question.objects.filter(application__recruiter=recruiter)
        data = []
        for question in questions:
            data.append({"question": question.question, "answer": question.answer, "answered": question.answered, "q_type": question.q_type})
        return Response(data, status=status.HTTP_200_OK)
    