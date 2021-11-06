from django.shortcuts import render
from django.contrib.auth import authenticate
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_400_BAD_REQUEST,
    HTTP_404_NOT_FOUND,
    HTTP_200_OK
)
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.views import APIView
from rest_framework import authentication

from .serializer import ItemSerializer
from .models import ItemObject, CustomModel


class ItemView(APIView):
    """
    Here we will expose the lists
    """
    # authentication_classes = [authentication.]

    def get(self, request):
        items = ItemObject.objects.all()
        serialized_items = ItemSerializer(items, many=True)
        return Response(serialized_items.data)

    def post(self, request):
        new_item = ItemSerializer(data=request.data)
        if new_item.is_valid():
            new_item.save()
            return Response('Its saved and correct', status=HTTP_200_OK)
        return Response('incorrect', status=HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
@csrf_exempt
def delete_item(request, pk):
    item = ItemObject.objects.get(id=pk)
    return Response('Incorrect', status=HTTP_200_OK)


@api_view(['GET'])
def test_view(request):
    return Response('Its actually working')


@api_view(['POST'])
@permission_classes((AllowAny,))
def test_login(request):
    email = request.data.get("email")
    password = request.data.get("password")
    user = authenticate(email=email, password=password)
    if user is None:
        return Response("Not allowed", status=HTTP_400_BAD_REQUEST)
    token, _ = Token.objects.get_or_create(user=user)
    user_json = {"id": user.id, "first_name": user.first_name,
                 "last_name": user.last_name, "token": token.key}
    return Response(user_json, status=HTTP_200_OK)
