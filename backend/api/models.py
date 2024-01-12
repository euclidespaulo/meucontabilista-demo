from django.db import models

class UserProfile(models.Model):
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    username = models.CharField(unique=True, max_length=100)
    password = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    companyName = models.CharField(max_length=100)
    industry = models.CharField(max_length=20)
    
    def __str__(self):
        return self.username

class Accounting(models.Model):
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    username = models.CharField(unique=True, max_length=100)
    email = models.EmailField(max_length=254)
    password = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)

    def __str__(self):
        return self.username

class Appointment(models.Model):
    dateTime = models.DateTimeField()
    
    STATUS_CHOICES = [
        ("Scheduled", "Scheduled"),
        ("Completed", "Completed"),
        ("Canceled", "Canceled"),
    ]
    status = models.CharField(max_length=10, choices=STATUS_CHOICES)

    LOCATION_CHOICES = [
        ("Zoom", "Zoom"),
        ("Office", "Office"),
        ("Phone", "Phone"),
    ]
    location = models.CharField(max_length=10, choices=LOCATION_CHOICES)

    userProfile = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    accounting = models.ForeignKey(Accounting, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.DateTime)


