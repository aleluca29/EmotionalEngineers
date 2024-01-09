from datetime import datetime
from typing import List

from models.moodModel import MoodEntry
from models.userModel import User


class MoodRepository:
    def create_mood_entry(self, user: User, mood: str, factors: List[str], journal_entry: str):
        mood_entry = MoodEntry(
            user=user,
            mood=mood,
            factors=factors,
            journal_entry=journal_entry,
            created_at=datetime.now()
        )
        mood_entry.save()
        return mood_entry

    # Add methods for querying mood entries as needed
