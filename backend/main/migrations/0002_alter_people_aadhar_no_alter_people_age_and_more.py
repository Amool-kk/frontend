# Generated by Django 4.1.1 on 2022-10-02 06:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='people',
            name='aadhar_no',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='people',
            name='age',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='people',
            name='contact',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='people',
            name='height',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='people',
            name='weight',
            field=models.CharField(max_length=50),
        ),
    ]