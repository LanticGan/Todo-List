from django.db import models

class Todo(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    content = models.CharField(max_length=100, default='')
    priority = models.IntegerField(default=3)
    complete = models.BooleanField(default=False)
    expiredate = models.CharField(max_length=20, default='')
    class Meta:
        ordering = ('created',)
