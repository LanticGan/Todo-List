from todo import views
from django.conf.urls import include, url
urlpatterns = [
    url(r'^snippets/$', views.todo_list),
    url(r'^snippets/(?P<pk>[0-9]+)/$', views.todo_detail),
]