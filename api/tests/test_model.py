import pytest
from .factories import URLFactory

pytestmark = pytest.mark.django_db


def test__str__():
    u = URLFactory()
    assert u.__str__() == u.original_url
    assert str(u) == u.original_url


def test_encode_decode():
    u = URLFactory()
    u.b64encode()
    decoded_msg = u.b64decode()
    assert decoded_msg == str(u.pk)
