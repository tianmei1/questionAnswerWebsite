from django.db import models

class Question(models.Model):
    title = models.CharField(max_length=255)
    text = models.TextField()
    # If you have a foreign key to a user, make sure it is also correctly defined
    # user = models.ForeignKey('auth.User', on_delete=models.CASCADE)
