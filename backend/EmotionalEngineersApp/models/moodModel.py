from mongoengine import Document, StringField, ReferenceField, ListField, DateTimeField

from .userModel import User


class MoodEntry(Document):
    user = ReferenceField(User, required=True)
    mood = StringField(required=True)
    factors = ListField(StringField())
    journal_entry = StringField()
    created_at = DateTimeField(required=True)
