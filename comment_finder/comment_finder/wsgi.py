"""
WSGI config for comment_finder project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/howto/deployment/wsgi/
"""

import os
from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'comment_finder.settings')

def application(environ, start_response):
    environ["PATH_INFO"] = unquote(environ["PATH_INFO"]).encode('utf-8').decode('iso-8859-1')
    _application = get_wsgi_application()
    return _application(environ, start_response)

# application = get_wsgi_application()
