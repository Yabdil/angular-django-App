from rest_framework import serializers
from .models import ItemObject, CustomModel



class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemObject
        fields = ['id', 'description', 'is_finished', 'created_by']


