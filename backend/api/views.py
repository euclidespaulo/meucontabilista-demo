from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets, permissions
from .serializers import*
from rest_framework.response import Response
from .models import*

# Create your views here.

def home(request):
    return HttpResponse('Euclides made it')



class AppointmentViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
    
    
    def list(self, request):
        queryset = self.queryset
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

    def retrieve(self, request, pk=None):
        appointment = self.queryset.get(pk=pk)
        serializer = self.serializer_class(appointment)
        return Response(serializer.data)

    def update(self, request, pk=None):
        appointment = self.queryset.get(pk=pk)
        serializer = self.serializer_class(appointment, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)
    
    
    def destroy(self, request, pk=None):
        appointment = self.queryset.get(pk=pk)
        appointment.delete()
        return Response(status=204)
  