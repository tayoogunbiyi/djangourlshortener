from rest_framework import generics

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

class URLList(generics.ListCreateAPIView):
    queryset = URL.objects.all()
    serializer_class = URLSerializer

URLList = URLList.as_view()

class URLDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = URL.objects.all()
    serializer_class = URLSerializer

URLDetail = URLDetail.as_view()

