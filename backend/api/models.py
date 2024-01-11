from django.db import models

class Company(models.Model):
    name =  models.CharField(max_Length =100)
    industry =  models.CharField(max_Length =20)
    location =  models.CharField(max_Length =20)
    
    def __str__(self):
        return self.name 

class User(models.Model):
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    username = models.CharField(unique=True, max_length=100)
    password = models.CharField(max_length=100)
    email = models.CharField(unique=True, max_length=100)
    phone = 
    Rol = models.CharField(max_length=100)
    company = models.ForeignKey(Company, on_delete = models.CASCADE)
    
    def __str__(self):
        return self.username 

class Appointment(models.Model):
    date = 
    time = 
    status = 
    location = 
    user = models.ForeignKey(User, on_delete = models.CASCADE)
    
    def __str__(self):
        return self.date
    
class Accounting(models.Model):
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    email = 
    phone = 
    
    
    
