from django.urls import path
from recruiters import views


urlpatterns = [
    path('createRecruiter/',view=views.CreateRecruiter.as_view()),
    path('recruiter/',view=views.ShowRecruiters.as_view()),
    path('users/<int:pk>',view=views.GetUesr.as_view()),
    path('users/',view=views.GetUsers.as_view()),
    path('postJob/',view=views.PostJob.as_view()),
    path('showJobs/',view=views.ShowJobs.as_view()),
    path('showApplicants/<int:job_id>/',view=views.ShowApplicants.as_view()),
    path('scheduleInterview/<int:applied_id>',view=views.ScheduleInterview.as_view()),
    path('approveApplicant/',view=views.ApproveApplicant.as_view()),
    path('rejectApplicant/',view=views.RejectApplicant.as_view()),
    path('showInterviews/<int:job_id>/',view=views.ShowInterviews.as_view()),
    path('addCategory/',view=views.AddCategory.as_view()),
    path('getCategories/',view=views.GetCategories.as_view()),
]