import factory
import factory.fuzzy

from ..models import URL


class URLFactory(factory.django.DjangoModelFactory):
    original_url = factory.Faker('url')

    class Meta:
        model = URL
