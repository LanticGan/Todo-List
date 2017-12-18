# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0002_remove_todo_code'),
    ]

    operations = [
        migrations.RenameField(
            model_name='todo',
            old_name='linenos',
            new_name='complete',
        ),
        migrations.RenameField(
            model_name='todo',
            old_name='title',
            new_name='content',
        ),
        migrations.AddField(
            model_name='todo',
            name='expiredata',
            field=models.CharField(default=b'', max_length=20, blank=True),
        ),
        migrations.AddField(
            model_name='todo',
            name='priority',
            field=models.IntegerField(default=3),
        ),
    ]
