# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0004_auto_20171218_1420'),
    ]

    operations = [
        migrations.RenameField(
            model_name='todo',
            old_name='expiredata',
            new_name='expiredate',
        ),
    ]
