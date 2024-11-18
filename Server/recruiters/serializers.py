from rest_framework import serializers
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import Group, User

from recruiters.models import Recruiter, Question, Application, Category, JobPost, Applied, Interview
from recruiters.models import JobPost, Application


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username', 'email']

# serialize all the modles
class RecruiterSerializer(serializers.ModelSerializer):
    user = serializers.DictField(write_only=True)
    token = serializers.CharField(read_only=True)
    class Meta:
        model = Recruiter
        fields = ['id', 'user', 'date_of_birth', 'token', 'phone', 'first_link', 'second_link', 'company']
    def create(self, validated_data):
        user_data = validated_data.pop('user', None)
        if user_data:
            user_serializer = UserSerializer(data=user_data)
            user_serializer.is_valid(raise_exception=True)
            user = user_serializer.save()
            
            if Recruiter.objects.filter(user=user).exists():
                raise serializers.ValidationError("This user already has an recruiter profile.")
            
            token, _ = Token.objects.get_or_create(user=user)
            validated_data['user'] = user
        else:
            raise serializers.ValidationError({"user": "User data is required."})
        recruiter = super().create(validated_data)
        recruiter.token = token.key
        return recruiter

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ['question','q_type','application']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id','name']

class ApplicationSerializer(serializers.ModelSerializer):
    # recruiter = serializers.PrimaryKeyRelatedField(queryset=Recruiter.objects.all())
    questions = QuestionSerializer(many=True)

    class Meta:
        model = Application
        fields = ['id', 'recruiter', 'questions'] 


class JobPostSerializer(serializers.ModelSerializer):

    class Meta:
        model = JobPost
        fields = ['id', 'recruiter', 'category', 'name', 'description', 'candidates_number', 'application', 'active','is_application']

    
class AppliedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Applied
        fields = ['applicant','approved','jobPost']

class InterviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Interview
        fields = ['applied','date','attended','cancelled']


class RecruiterUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recruiter
        fields = ['date_of_birth', 'phone', 'first_link', 'second_link', 'company']