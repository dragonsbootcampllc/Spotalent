from django.urls import path

from . import views
urlpatterns = [
    path('applyJob/<int:job_id>',view=views.ApplyJob.as_view()),
    path('showJobs/',view=views.ShowJobs.as_view()),
    path('showAppliedJobs/',view=views.ShowAppliedJobs.as_view())
]