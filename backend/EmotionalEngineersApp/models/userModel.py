from mongoengine import Document, StringField

class User(Document):
    email = StringField(required=True, unique=True)
    password_hash = StringField(required=True)
