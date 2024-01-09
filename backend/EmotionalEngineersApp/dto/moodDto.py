from typing import List

from pydantic import BaseModel, Field


class MoodEntryRequest(BaseModel):
    mood: str = Field(..., example="Happy")
    factors: List[str] = Field(..., example=["Sleep", "Friends"])
    journal_entry: str = Field(None, example="Felt good today because...")


class MoodEntryResponse(BaseModel):
    message: str
    mood_id: str


class ErrorResponse(BaseModel):
    error: str
