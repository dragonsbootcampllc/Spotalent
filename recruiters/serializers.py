from rest_framework import serializers

from .models import Recruiter, Question, Application, Category, JobPost, Applied, Interview

# serialize all the modles
class RecruiterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recruiter
        fields = ['user','date_of_birth']

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ['question','answer','answered','q_type']

class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = ['recruiter','questions']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name']

class JobPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobPost
        fields = ['recruiter','category','name','description','candidates_number','application','active']

class AppliedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Applied
        fields = ['application','applicant','approved']

class InterviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Interview
        fields = ['recruiter','applicant','date']

