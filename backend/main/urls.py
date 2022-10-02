from django.urls import path
from .views import PeopleView

urlpatterns = [
    path('people/', PeopleView, name='people'),
]