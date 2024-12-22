from django.urls import path
from users.views import (
    LoginView,
    RefreshTokenView,
    LogoutView,
    CurrentUserView,
    RegistrationView
)


urlpatterns = [
    path('v1/register/', RegistrationView.as_view(), name='register'),
    path('v1/login/', LoginView.as_view(), name='login'),
    path('v1/refresh/', RefreshTokenView.as_view(), name='refresh_token'),
    path('v1/logout/', LogoutView.as_view(), name='logout'),
    path('v1/users/', CurrentUserView.as_view(), name='users'),
]
