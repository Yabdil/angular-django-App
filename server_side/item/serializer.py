from rest_framework import serializers
from .models import ItemObject


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemObject
        fields = '__all__'

