import os
import unittest
import json

from rest_framework.test import APIClient
from dotenv import load_dotenv

from .models import ItemObject
from .models import CustomModel


load_dotenv()

EMAIL = os.getenv('test_email')
PASSWORD = os.getenv('test_password')
WRONG_EMAIL = os.getenv('wrong_email')
WRONG_PASSWORD = os.getenv('wrong_password')


class TestAuthLogin(unittest.TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_sucess_login(self):
        # Connecting with a existing email, and password
        response = self.client.post('/login', {'email': EMAIL, 'password': PASSWORD})

        # Checking we have a 200 ok status
        self.assertEqual(response.status_code, 200)

        # Checking whether we have the token in the response
        returned_data = json.loads(response.content)
        self.assertIn('token', returned_data.keys())

    def test_fail_login(self):
        # Checking we have a 400 bad request status with a a wrong email and password
        wrong_response = self.client.post('/login', {'email': WRONG_EMAIL, 'password': WRONG_PASSWORD})
        self.assertEqual(wrong_response.status_code, 401)

        # Check the returned message
        msg = json.loads(wrong_response.content)
        self.assertEqual(msg, 'Wrong username or password')


class TestAuthLogout(unittest.TestCase):
    """
    In this test, the main goal is to generate a token,
    then after try to logout by providing the token.
    """
    def setUp(self):
        self.result = self.generete_token(EMAIL, PASSWORD)
        self.client = APIClient()

    def test_logout(self):
        token = self.result['token']
        url = '/logout?token={}'.format(token)  # url like :/logout?token={token}
        response = self.client.get(url)

        # Testing we have a 200 status code
        self.assertEqual(response.status_code, 200)
        self.assertEqual(json.loads(response.content), 'Successfully logout')

    def generete_token(self, email, password):
        result = APIClient().post('/login', {'email': email, 'password': password})
        return json.loads(result.content)


class TestItem(unittest.TestCase):
    def setUp(self):
        self.user = CustomModel.objects.get(pk=24)
        self.item = ItemObject(description='First Test', created_by=self.user)

    def test_returned_format_of_item_instance(self):
        self.assertEquals(self.item, 'First ...')




