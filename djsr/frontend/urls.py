from django.urls import path, re_path
from .views import index_view

urlpatterns = [
    path('', index_view), # for the empty url
    re_path('^.*/$', index_view), # for all other urls
]
