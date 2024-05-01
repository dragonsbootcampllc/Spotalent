from django.urls import path
from recruiters import views


urlpatterns = [
    path('postJob',view=views.PostJob.as_view()),
    path('showJobs/',view=views.ShowJobs.as_view()),
    path('showApplicants/<int:job_id>',view=views.ShowApplicants.as_view()),
    path('scheduleInterview',view=views.ScheduleInterview.as_view()),
    path('approveApplicant',view=views.ApproveApplicant.as_view()),
    path('rejectApplicant',view=views.RejectApplicant.as_view()),
    path('showInterviews',view=views.ShowInterviews.as_view()),
]