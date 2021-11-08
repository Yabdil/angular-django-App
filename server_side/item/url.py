from django.urls import path, include
from .views import (
    ItemView,
    AuthLogin,
    AuthLogout
)


urlpatterns = [
    path('', ItemView.as_view(), name="Add, delete and Get list of items path"),
    path('login', AuthLogin.as_view(), name="login"),
    path('logout', AuthLogout.as_view(), name="logout")
]