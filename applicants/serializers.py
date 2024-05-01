from rest_framework import serializers

from models import Applicant 

class ApplicantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Applicant
        fields = ['user','date_of_birth']