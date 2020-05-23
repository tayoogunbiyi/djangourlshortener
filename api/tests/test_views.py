import pytest

from pytest_django.asserts import assertContains, assertRedirects

from django.urls import reverse
from django.contrib.sessions.middleware import SessionMiddleware

from django.test import RequestFactory

from ..models import URL
from ..views import redirect_view, URLDetail, URLList

from .factories import URLFactory


pytestmark = pytest.mark.django_db


def test_create_url(rf):
    # url = URLFactory()
    request = rf.post(reverse('api:url_list'), {
                      'original_url': 'https://www.gooogle.com'})

    response = URLList.as_view()(request)

    u = URL.objects.last()
    assert u.original_url == 'https://www.gooogle.com'
    assert 1 == 1
