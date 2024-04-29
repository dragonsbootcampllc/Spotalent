from django.db import models
from django.conf import settings

from applicants.models import Applicant

User = settings.AUTH_USER_MODEL

class Recruiter(models.Model):
    user = models.OneToOneField(User, related_name='recruiter', on_delete=models.CASCADE)
    date_of_birth = models.DateField()


class Question(models.Model):
    question = models.TextField()
    answer = models.TextField(null=True, blank=True)
    answered = models.BooleanField(default=False)
    q_type = models.CharField(max_length=100)



class Application(models.Model):
    recruiter = models.ForeignKey(Recruiter, related_name='applications', on_delete=models.CASCADE)
    questions = models.ForeignKey(Question, related_name='questions', on_delete=models.CASCADE)


class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)


class JobPost(models.Model):
    recruiter = models.ForeignKey(Recruiter, related_name='posts', on_delete=models.CASCADE)
    category = models.OneToOneField(Category, related_name='category', on_delete=models.CASCADE)
    name = models.CharField(max_length=250)
    description = models.TextField()
    candidates_number = models.IntegerField()
    application = models.OneToOneField(Application, related_name='application', on_delete=models.SET_NULL, null=True)
    active = models.BooleanField(default=True)



class Applied(models.Model):
    application = models.ForeignKey(Application, related_name='applies_from', on_delete=models.CASCADE)
    applicant = models.ForeignKey(Applicant, related_name='applied_for', on_delete=models.CASCADE)
    approved = models.BooleanField(default=False)


class Interview(models.Model):
    recruiter = models.ForeignKey(Recruiter, related_name='interviews', on_delete=models.CASCADE)
    applicant = models.ForeignKey(Applicant, on_delete=models.CASCADE)
    date = models.DateTimeField()