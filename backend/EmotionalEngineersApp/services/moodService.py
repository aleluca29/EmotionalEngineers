from typing import List

from dal.moodRepository import MoodRepository
from models.userModel import User


class MoodService:
    def __init__(self, mood_repository: MoodRepository):
        self.mood_repository = mood_repository

    def create_mood_entry(self, user: User, mood: str, factors: List[str], journal_entry: str):
        return self.mood_repository.create_mood_entry(user, mood, factors, journal_entry)
