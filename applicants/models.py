from django.db import models
from django.conf import settings


User = settings.AUTH_USER_MODEL

class Applicant(models.Model):
    user = models.OneToOneField(User, related_name='applicant', on_delete=models.CASCADE)
    date_of_birth = models.DateField()


