from django.urls import path, include
from user_favorites import views

urlpatterns = [
    path('', views.users_favorites),
    path('all/', views.get_all_user_favorites),
]