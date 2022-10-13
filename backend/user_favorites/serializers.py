from rest_framework import serializers
from .models import User_Favorites

class User_FavoritesSerializer(serializers.ModelSerializer):
    class Meta:
        model = User_Favorites
        fields = ['id', 'user', 'favorites', 'animeTitle', 'animeImg', 'synopsis', 'MangaTitle', 'MangaCover', 'MangaSynopsis', 'user_id']
        depth = 1