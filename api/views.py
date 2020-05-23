from django.shortcuts import get_object_or_404,redirect

from rest_framework import generics

from .models import URL
from .serializers import URLSerializer


def redirect_view(self,url_hash):
    url = get_object_or_404(URL,url_hash=url_hash)
    return redirect(url.original_url)

class URLList(generics.ListCreateAPIView):
    queryset = URL.objects.all()
    serializer_class = URLSerializer


class URLDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = URL.objects.all()
    serializer_class = URLSerializer


