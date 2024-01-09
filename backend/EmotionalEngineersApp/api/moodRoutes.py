from fastapi import APIRouter, Depends, HTTPException

from dal.moodRepository import MoodRepository
from dto.moodDto import MoodEntryRequest, MoodEntryResponse, ErrorResponse
from server import get_current_user
from services.moodService import MoodService

router = APIRouter()
mood_service = MoodService(MoodRepository())


@router.post("/track", response_model=MoodEntryResponse, responses={400: {"model": ErrorResponse}})
async def track_mood(mood_request: MoodEntryRequest, user=Depends(get_current_user)):
    mood_entry = mood_service.create_mood_entry(user, **mood_request.dict())
    if mood_entry:
        return MoodEntryResponse(message="Mood tracked successfully", mood_id=str(mood_entry.id))
    else:
        raise HTTPException(status_code=400, detail="Error tracking mood")
