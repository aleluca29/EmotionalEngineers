from mongoengine import DateTimeField
from mongoengine import Document, StringField


class User(Document):
    email = StringField(required=True, unique=True)
    password_hash = StringField(required=True)


class UserProfile(Document):
    name = StringField(required=True)
    date_of_birth = DateTimeField(required=True)
    country = StringField(required=True)
