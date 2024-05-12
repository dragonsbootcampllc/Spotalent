from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path('api/recruiter/', include('recruiters.urls')),
    path('api/applicant/', include('applicants.urls')),
]
