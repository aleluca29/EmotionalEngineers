from fastapi import FastAPI
from api import userRoutes, moodRoutes, meditationRoutes, chatRoutes

app = FastAPI()

app.include_router(userRoutes.router, prefix="/user", tags=["Users"])
app.include_router(moodRoutes.router, prefix="/mood", tags=["Moods"])
app.include_router(meditationRoutes.router, prefix="/meditation", tags=["Meditations"])
app.include_router(chatRoutes.router, prefix="/chat", tags=["ChatBot"])