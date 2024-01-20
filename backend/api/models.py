from django.db import models

class Appointment(models.Model):
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    companyName = models.CharField(max_length=100)
    industry = models.CharField(max_length=20)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    comment = models.CharField(max_length=500, blank=True, null=True)
    status = models.CharField(max_length=100)

    LOCATION_CHOICES = [
        ("Zoom", "Zoom"),
        ("Office", "Office"),
        ("Phone", "Phone"),
    ]
    
    location = models.CharField(max_length=10, choices=LOCATION_CHOICES)
    
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    

    def __str__(self):
        return str(self.firstname)


