from fastapi import APIRouter
from models import userModel
from services import userService

router = APIRouter()

@router.post("/register/")
async def register_user(user: userModel.UserCreate):
    return userService.create_user(user)

@router.post("/login/")
async def login_user(credentials: userModel.UserLogin):
    return userService.authenticate_user(credentials)