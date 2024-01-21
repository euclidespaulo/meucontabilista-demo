from django.db import models
from django.utils import timezone

class Appointment(models.Model):
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    companyemail = models.EmailField(max_length=100, null=True, default=timezone.now)
    companyphone = models.CharField(max_length=100)
    companyname = models.CharField(max_length=100)
    
    COMPANY_SIZE = [
        ("1-10", "1-10"),
        ("11-50", "11-50"),
        ("51-100", "51-100"),
        ("100+", "100+"),
    ]
    
    companysize = models.CharField(max_length=10, choices=COMPANY_SIZE)
    start_date = models.DateTimeField(default=timezone.now)
    end_date = models.DateTimeField(default=timezone.now)
    audit_and_assurance = models.BooleanField(default=False)
    taxation = models.BooleanField(default=False)
    financial_analysis = models.BooleanField(default=False)
    comment = models.CharField(max_length=500, blank=True, null=True)
    
    

    def __str__(self):
        return str(self.companyname)


