from django.apps import AppConfig

print('hereeeeeeeeeee')
class ApiConfig(AppConfig):
    name = 'api'
    def ready(self):
        import api.signals

