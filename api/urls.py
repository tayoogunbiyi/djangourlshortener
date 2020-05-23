
from django.urls import path, re_path, include
from . import views

urlpatterns = [
    path('urls/<int:pk>', views.URLDetail.as_view(), name='url_detail'),
    path('urls/create', views.URLList.as_view(), name='url_list'),
    # path('/<url_hash>', views.redirect_view, name='redirect')
]
