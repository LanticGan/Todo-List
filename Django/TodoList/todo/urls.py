from todo import views
from django.conf.urls import include, url
urlpatterns = [
    url(r'^list/$', views.todo_list),
    url(r'^item/(?P<pk>[0-9]+)/$', views.todo_item_detail),
]