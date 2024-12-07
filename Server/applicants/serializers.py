from rest_framework import serializers
from rest_framework.authtoken.models import Token

from applicants.models import Applicant
from recruiters import serializers as Recruiter_serializers

from django.contrib.auth.models import User

class ApplicantSerializer(serializers.ModelSerializer):
    user = serializers.DictField(write_only=True)
    token = serializers.CharField(read_only=True)
    class Meta:
        model = Applicant
        fields = ['id','user','date_of_birth','token' ]
    def create(self, validated_data):
        user_data = validated_data.pop('user', None)
        if user_data:
            user_serializer = Recruiter_serializers.UserSerializer(data=user_data)
            user_serializer.is_valid(raise_exception=True)
            user = user_serializer.save()
            if Applicant.objects.filter(user=user).exists():
                raise serializers.ValidationError("This user already has an applicant profile.")
            token, _ = Token.objects.get_or_create(user=user)
            validated_data['user'] = user
        applicant = super().create(validated_data)
        applicant.token = token.key
        return applicant