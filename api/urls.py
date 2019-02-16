
from django.urls import path, re_path,include
from . import views

urlpatterns = [
    # 1st path is to acccount for when user fails to put traling slash at the end of the url 
    # path('<url_hash>',views.redirect_view,name='redirect'),
    # path('<url_hash>/',views.redirect_view,name='redirect'),
    path('api/<int:pk>',views.URLDetail, name='url_detail'),
    path('api/urls',views.URLList,name='url_list')
]