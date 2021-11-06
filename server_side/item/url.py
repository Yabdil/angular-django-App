from django.urls import path, include
from .views import ItemView, test_login, delete_item


urlpatterns = [
    path('', ItemView.as_view()),
    path('<int:pk>', delete_item),
    path('login', test_login)
]