from django.db import models


class Client(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    birth_date = models.DateField()
    # Falta adicionar soft delete e métodos para restaurar

    def __str__(self):
        return self.name
