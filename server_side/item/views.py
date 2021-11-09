from django.shortcuts import render
from django.contrib.auth import authenticate
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_400_BAD_REQUEST,
    HTTP_404_NOT_FOUND,
    HTTP_200_OK,
    HTTP_201_CREATED
)
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.views import APIView
from rest_framework.authentication import TokenAuthentication

from .serializer import ItemSerializer
from .models import ItemObject, CustomModel


class ItemView(APIView):
    """
    Here we will expose the lists
    """
    permission_classes = [IsAuthenticated]

    def get(self, request):
        items = ItemObject.objects.all()
        serialized_items = ItemSerializer(items, many=True)
        return Response(serialized_items.data)

    def post(self, request):
        new_item = ItemSerializer(data=request.data)
        if new_item.is_valid():
            new_item.save()
            return Response('Its saved and correct', status=HTTP_201_CREATED)
        return Response('incorrect', status=HTTP_400_BAD_REQUEST)

    def delete(self, request):
        """
        Deleting the item by using the id of the item passed in the params
        :param: request
        :return: Response
        """
        item = ItemObject.objects.get(id=request.data.get('id')).delete()
        return Response('Successfully deleted', status=HTTP_200_OK)



class AuthLogin(APIView):
    permission_classes = [AllowAny]

    def post(self, request):  # Login Method
        """
        Handle the token creation by authenticating the user with an email and password
        :param request: Request
        :return : Response dict with first_name, last_name, id, token properties
        """
        email = request.data.get("email")
        password = request.data.get('password')
        print(email, print(password))
        user = authenticate(email=email, password=password)
        if user is None:
            return Response('Not allowed', status=HTTP_400_BAD_REQUEST)

        token, _ = Token.objects.get_or_create(user=user)
        user_json = {'id': user.id, 'firstName': user.first_name,
                     'lastName': user.last_name, 'token': token.key}

        return Response(user_json, status=HTTP_200_OK)


class AuthLogout(APIView):

    def delete(self, request):  # Logout Method
        """
        Remove the token when the user logout
        :param: request: Request
        :return: Response
        """
        token = request.auth
        if token is not None:
            user = Token.objects.get(key=token).delete()
            return Response('Successfully logout', HTTP_200_OK)

        return Response(HTTP_400_BAD_REQUEST)
