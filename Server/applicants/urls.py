from django.urls import path
from applicants import views

urlpatterns = [
    path('',view=views.GetCreateApplicant.as_view()),
    path('job/<int:job_id>',view=views.ApplyJob.as_view()),
    path('job',view=views.ShowJobs.as_view()),
    path('job/applied',view=views.ShowAppliedJobs.as_view()),
    path('register',view=views.RegisterApplicant.as_view())
]