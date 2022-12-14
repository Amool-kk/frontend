# Generated by Django 4.1.1 on 2022-10-02 07:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_rename_gander_people_gender'),
    ]

    operations = [
        migrations.CreateModel(
            name='PeopleFound',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('reporter_name', models.CharField(max_length=100)),
                ('contact', models.CharField(max_length=50)),
                ('name', models.CharField(max_length=100)),
                ('image', models.ImageField(upload_to='images/')),
                ('missing_name', models.CharField(max_length=100)),
                ('clothes_color', models.CharField(max_length=100)),
                ('aadhar_no', models.CharField(max_length=50)),
                ('gender', models.CharField(max_length=10)),
                ('height_characterstics', models.CharField(max_length=50)),
                ('body_characterstics', models.CharField(max_length=50)),
                ('complexion', models.CharField(max_length=50)),
                ('hair_characterstics', models.CharField(max_length=50)),
            ],
        ),
    ]
