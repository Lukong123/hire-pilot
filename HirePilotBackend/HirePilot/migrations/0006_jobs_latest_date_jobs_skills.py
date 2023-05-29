# Generated by Django 4.2 on 2023-05-29 11:14

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('HirePilot', '0005_alter_employer_email'),
    ]

    operations = [
        migrations.AddField(
            model_name='jobs',
            name='latest_date',
            field=models.DateField(default=django.utils.timezone.now, verbose_name='date left'),
        ),
        migrations.AddField(
            model_name='jobs',
            name='skills',
            field=models.CharField(max_length=100, null=True),
        ),
    ]
