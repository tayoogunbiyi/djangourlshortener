from .models import URL
from rest_framework import serializers

class URLSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = URL
        fields = ('original_url',)
    