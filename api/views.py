from django.http import Http404, HttpResponse
from django.shortcuts import redirect,get_object_or_404
from rest_framework import status
from rest_framework.generics import RetrieveUpdateAPIView
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import URL
from .serializers import URLSerializer


def Index(request):
    return HttpResponse('''
    path('urls/<int:pk>/', views.URLDetail.as_view(), name='bio'),
    path('urls/',views.URLCreate.as_view())
    '''
)

def redirect_view(self,url_hash):
    url = get_object_or_404(URL,url_hash=url_hash)
    return redirect(url.original_url)

class URLDetail(RetrieveUpdateAPIView):
    queryset = URL.objects.all()
    serializer_class = URLSerializer

class URLCreate(APIView):
    """
    Create a new shortened URL 
    """
    def get(self,request):
        urls = URL.objects.all()
        serializer = URLSerializer(urls,many=True)
        return Response(serializer.data)
    def post(self,request):
        serializer = URLSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            url = URL.objects.get(original_url=serializer.data['original_url'])
            url_hash = url.b64encode(serializer.data['url_hash'])
            response = [serializer.data,url_hash]
            return Response(response, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
