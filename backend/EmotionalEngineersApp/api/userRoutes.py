from fastapi import APIRouter, HTTPException
from dto.userDto import LoginRequest, LoginResponse, ErrorResponse
from services.userService import UserService
from dal.userRepository import UserRepository

router = APIRouter()
user_service = UserService(UserRepository())

@router.post("/login", response_model=LoginResponse, responses={401: {"model": ErrorResponse}})
async def login(login_request: LoginRequest):
    user = user_service.login_user(login_request.email, login_request.password)
    if user:
        return LoginResponse(message="Login successful", user_id=str(user.id))
    else:
        raise HTTPException(status_code=401, detail="Invalid credentials")
