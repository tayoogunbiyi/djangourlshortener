
from django.urls import path, re_path,include
from . import views

urlpatterns = [
    path('<url_hash>',views.redirect_view,name='redirect'),
    path('api/urls/<int:pk>',views.URLDetail, name='url_detail'),
    path('api/urls',views.URLList,name='url_list')
]