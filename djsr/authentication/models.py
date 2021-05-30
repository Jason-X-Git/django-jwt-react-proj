from django.db import models

from django.contrib.auth.models import AbstractUser

from django.db import models


class CustomUser(AbstractUser):
    
    fav_color = models.CharField(max_length=120, blank=True)
    