from .models import URL
from rest_framework import serializers


class URLSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = URL
        fields = ('original_url', 'url_hash')
        read_only_fields = ['url_hash']
