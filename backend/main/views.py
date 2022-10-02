from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import People
from .serializers import PeopleSerializer

# Create your views here.


@api_view(['GET','POST'])
def PeopleView(request):
    if request.method == 'GET':
        people = People.objects.all()
        serializer = PeopleSerializer(people, many=True)
        print("SERIALIZER=",serializer.data)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = PeopleSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        print("SERIALIZER=",serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
