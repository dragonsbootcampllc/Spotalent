from django.urls import path

from . import views
urlpatterns = [
    path('createApplicant',view=views.CreateApplicant.as_view()),
    path('showApplicants',view=views.ShowApplicants.as_view()),
    path('applyJob/<int:job_id>',view=views.ApplyJob.as_view()),
    path('showJobs/',view=views.ShowJobs.as_view()),
    path('showAppliedJobs/',view=views.ShowAppliedJobs.as_view())
]