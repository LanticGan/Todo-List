# coding=utf-8

from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.renderers import JSONRenderer
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from todo.models import Todo
from todo.serializers import SnippetSerializer


@csrf_exempt
def todo_list(request):

    #获取Todo List
    if request.method == 'GET':
        toDoList = Todo.objects.all()
        serializer = SnippetSerializer(toDoList, many=True)
        res = JsonResponse(serializer.data, safe=False)
        res['Access-Control-Allow-Origin'] = '*'
        return res

    #新建Todo Item
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = SnippetSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=200)
        return JsonResponse(serializer.errors, status=400)



@csrf_exempt
def todo_item_detail(request, pk):
    
    try:
        todoItem = Todo.objects.get(pk=pk)
    except Todo.DoesNotExist:
        return HttpResponse(status=404)

    # 编辑Todo Item
    if request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = SnippetSerializer(todoItem, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    # 删除Todo Item
    elif request.method == 'DELETE':
        todoItem.delete()
        return HttpResponse(status=200)