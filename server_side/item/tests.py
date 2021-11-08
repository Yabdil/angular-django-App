import os
import unittest
import json

from django.test import TestCase
from rest_framework.test import APIClient
from dotenv import load_dotenv

from .models import ItemObject
from .models import CustomModel


load_dotenv()

EMAIL = os.getenv('test_email')
PASSWORD = os.getenv('test_password')
WRONG_EMAIL = os.getenv('wrong_email')
WRONG_PASSWORD = os.getenv('wrong_password')


def generete_token(email, password):
    result = APIClient().post('/login', {'email': email, 'password': password})
    return json.loads(result.content)


class TestAuthLogin(unittest.TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_sucess_login(self):
        response = self.client.post('/login', {'email': EMAIL, 'password': PASSWORD})

        # Checking we have a 200 ok status
        self.assertEqual(response.status_code, 200)

        # Checking whether we have the token in the response
        returned_data = json.loads(response.content)
        print(returned_data)
        self.assertIn('token', returned_data.keys())

    def test_fail_login(self):
        # Checking we have a 400 bad request status with a a wrong email and password
        wrong_response = self.client.post('/login', {'email': WRONG_EMAIL, 'password': WRONG_PASSWORD})
        self.assertEqual(wrong_response.status_code, 400)

        # Check the returned message
        msg = json.loads(wrong_response.content)
        self.assertEqual(msg, 'Not allowed')


class TestAuthLogout(unittest.TestCase):
    def setUp(self):
        self.response = generete_token(EMAIL, PASSWORD)
        self.client = APIClient()

    def test_logout(self):
        self.client.credentials(HTTP_AUTHORIZATION='Token ' + self.response['token'])
        response = self.client.delete('/logout')

        self.assertEqual(response.status_code, 200)
        self.assertEqual(json.loads(response.content), 'Successfully logout')


class TestItem(unittest.TestCase):
    def setUp(self):
        self.user = CustomModel.objects.get(pk=24)
        self.item = ItemObject(description='First Test', created_by=self.user)

    def test_returned_format_of_item_instance(self):
        self.assertEquals(self.item, 'First ...')




