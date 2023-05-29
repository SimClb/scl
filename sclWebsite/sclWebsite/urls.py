from django.contrib import admin
from django.urls import path, include
from homepage import views as homepage_views
from mailer import views as contact_views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', homepage_views.home, name='home'),
    path('contact/', contact_views.contact, name="contact"),
    path('mail-sent/', contact_views.emailSent, name="mail-sent"),
]

urlpatterns += staticfiles_urlpatterns()
