from .models import URL
from django.db.models.signals import post_save
from django.dispatch import receiver

@receiver(post_save,sender=URL)
def create_url_hash(sender,instance,created, **kwargs):
    if not created:
        return
    instance.b64encode()
    instance.save()
    