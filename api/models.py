from base64 import urlsafe_b64decode,urlsafe_b64encode

from django.db import models
from django.utils import timezone


class URL(models.Model):
    original_url = models.URLField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    url_hash = models.CharField(max_length=264,unique=True)
    custom_hash = models.BooleanField(default=False)

    def __str__(self):
        return self.original_url
        
    
    def b64encode(self,custom_url_hash=None):
        '''
        Converts the pk of the current model instance to it's b64 encoded equivalent
        '''
        url_hash = urlsafe_b64encode(str(self.pk).encode())
        self.url_hash = url_hash.decode('ascii')
        

        
    def b64decode(self):
        '''
        Returns the pk of the current model instance by decoding it's url hash
        '''
        decoded_hash = urlsafe_b64decode(self.url_hash)
        return decoded_hash.decode('ascii')

        



