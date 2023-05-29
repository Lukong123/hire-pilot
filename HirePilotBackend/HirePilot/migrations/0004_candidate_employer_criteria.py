# Generated by Django 4.2 on 2023-05-29 10:55

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('HirePilot', '0003_resume'),
    ]

    operations = [
        migrations.CreateModel(
            name='Candidate',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=20)),
                ('last_name', models.CharField(max_length=20)),
                ('email', models.EmailField(max_length=20)),
                ('date_created', models.DateField(default=django.utils.timezone.now, verbose_name='date created')),
            ],
        ),
        migrations.CreateModel(
            name='Employer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('company_name', models.CharField(max_length=20)),
                ('email', models.EmailField(max_length=20)),
                ('location', models.CharField(max_length=20)),
                ('phone', models.PositiveIntegerField()),
                ('industry_type', models.CharField(choices=[('Agriculture', 'Agriculture'), ('Engineering', 'Engineering'), ('Health Care', 'Health Care'), ('Hospitality and Tourism', 'Hospitality and Tourism'), ('Aerospace', 'Aerospace'), ('Transport and Logistics', 'Transport and Logistics'), ('Banking and Finance', 'Banking and Finance'), ('Media and Entertainment', 'Media and Entertainment'), ('Professional Services', 'Professional Services'), ('Others', 'Others')], default='Others', max_length=25)),
                ('date_created', models.DateField(default=django.utils.timezone.now, verbose_name='date created')),
            ],
        ),
        migrations.CreateModel(
            name='Criteria',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('skill', models.CharField(max_length=200)),
                ('degree', models.CharField(max_length=200)),
                ('experience', models.CharField(max_length=200)),
                ('language', models.CharField(max_length=200)),
                ('age', models.CharField(max_length=200)),
                ('job_name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='HirePilot.jobs')),
            ],
        ),
    ]
