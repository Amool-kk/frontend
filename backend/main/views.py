from urllib import response
from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404

from .models import People, PeopleFound
from .serializers import PeopleSerializer, PeopleFoundSerializer

# Create your views here.


@api_view(['GET','POST'])
def PeopleView(request, pk=None):
    if request.method == 'GET':
        people = get_object_or_404(People, pk=pk)
        serializer = PeopleSerializer(people, many=True)
        # print("SERIALIZER=",serializer.data)
        return Response(serializer.data)

    if request.method == 'POST':
        people = get_object_or_404(People, pk=pk)
        serializer = PeopleSerializer(people, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        # print("SERIALIZER=",serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class PeopleFoundView(APIView):
    def get(self, request, pk):
        # people = People.objects.all()
        people = get_object_or_404(PeopleFound, pk=pk)
        serializer = PeopleFoundSerializer(people, many=True)
        print("SERIALIZER=",serializer.data)
        return Response(serializer.data)

    def post(self, request, pk):
        people = get_object_or_404(PeopleFound, pk=pk)
        serializer = PeopleFoundSerializer(people, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        print("SERIALIZER=",serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


def SearchView(request):
    query = request.POST.get('aadhar_no')
    search_results = People.objects.filter(Q(aadhar_no__icontains=query))
    context = {
        'search_results':search_results
    }
    return response(context)