# Generated by Django 4.2.7 on 2024-01-21 14:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_alter_appointment_end_date_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointment',
            name='end_date',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='appointment',
            name='start_date',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
