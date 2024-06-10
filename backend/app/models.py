from django.db import models
from django.contrib.auth.models import AbstractUser

class Question(models.Model):
    title = models.CharField(max_length=255)
    text = models.TextField()
    # If you have a foreign key to a user, make sure it is also correctly defined
    # user = models.ForeignKey('auth.User', on_delete=models.CASCADE)

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.email
