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
    email = models.EmailField(max_length = 254)
    phone = models.CharField(max_length=100)
    Rol = models.CharField(max_length=100)
    company = models.ForeignKey(Company, on_delete = models.CASCADE)
    
    def __str__(self):
        return self.username 

class Appointment(models.Model):
    date = models.DateField()
    time = models.TimeField()
    
    opt1 = ""
    opt2 = ""
    opt3 = ""
    opt = {
        opt1: "Scheduled",
        opt2: "Completed",
        opt3: "Canceled"
    }
    status = models.CharField(
        max_length=10,
        choices=opt,
        default=opt1
    )
    
    option1 = ""
    option2 = ""
    option3 = ""
    
    option = {
        option1: "Zomm",
        option2: "Office",
        option3: " Phone"
            }
    
    location = models.CharField(
        max_length=10, 
        choices=option, 
        default=option1
    )
        
    user = models.ForeignKey(User, on_delete = models.CASCADE)
    
    def __str__(self):
        return self.date
    
class Accounting(models.Model):
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    email = models.EmailField(max_length = 254)
    phone = models.CharField(max_length=100)
    
    def __str__(self):
        return self.firstname
    
    
