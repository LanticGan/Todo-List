from rest_framework import serializers
from todo.models import Todo


class SnippetSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    content = serializers.CharField(required=False, allow_blank=True, max_length=100)
    priority = serializers.IntegerField(default=3)
    complete = serializers.BooleanField(default=False)
    created = serializers.DateTimeField(required=False)
    expiredate = serializers.CharField(max_length=20, default='')

    def create(self, validated_data):
        return Todo.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.content = validated_data.get('content', instance.content)
        instance.complete = validated_data.get('complete', instance.complete)
        instance.save()
        return instance