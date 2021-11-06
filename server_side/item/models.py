from django.db import models
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser
)
class CustomManager(BaseUserManager):
    def create_user(self, email, password=None):
        if not email:
            raise ValueError('Need an email address')
        user = self.model(email=self.normalize_email(email))
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password=None):
        user = self.model(email=self.normalize_email(email),
                          password=password)
        user.is_admin = True
        user.save()
        return user

# Create your models here.
class CustomModel(AbstractBaseUser):
    email = models.EmailField(max_length=200, unique=True)
    first_name = models.TextField(max_length=200)
    last_name = models.TextField(max_length=200)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    objects = CustomManager()

    USERNAME_FIELD = 'email'

    def __str__(self):
        return '{0} {1}'.format(self.first_name, self.last_name)

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        #Does the user had the admin status ?
        return self.is_admin


class ItemObject(models.Model):
    description = models.TextField(max_length=200)
    is_finished = models.BooleanField(default=False)
    created_by = models.ForeignKey('CustomModel', on_delete=models.CASCADE)

    def __str__(self):
        """
        Returning the first 5 letters of the description and 3 dot
        ex: Trips ...
        """
        return '{} ...'.format(self.description[0:5])

