from django.urls import path, include
from .views import (
    ItemView,
    ItemDetailView,
    AuthLogin,
    AuthLogout)


urlpatterns = [
    path('items', ItemView.as_view(), name="Add, delete and Get list of items path"),
    path('item/<int:pk>', ItemDetailView.as_view(), name="Get one item"),
    path('login', AuthLogin.as_view(), name="login"),
    path('logout', AuthLogout.as_view(), name="logout")
]