# Generated by Django 4.2.7 on 2024-04-12 03:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='description',
            field=models.CharField(blank=True, max_length=300),
        ),
        migrations.AlterField(
            model_name='reviews',
            name='description',
            field=models.CharField(blank=True, max_length=300),
        ),
    ]
