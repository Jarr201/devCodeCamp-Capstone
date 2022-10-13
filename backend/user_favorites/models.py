from pydoc import synopsis
from django.db import models
from authentication.models import User

# Create your models here.

class User_Favorites(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    favorites = models.CharField(max_length=255)
    animeTitle = models.CharField(max_length=255)
    animeImg = models.CharField(max_length=450)
    synopsis = models.CharField(max_length=3000)
    MangaTitle = models.CharField(max_length=255)
    MangaCover = models.CharField(max_length=450)
    MangaSynopsis = models.CharField(max_length=3000)