# api/userRoutes.py

from dal.userRepository import UserRepository
from dto.userDto import LoginRequest, LoginResponse, RegisterRequest, RegisterResponse, ErrorResponse
from fastapi import APIRouter, HTTPException
from services.userService import UserService

router = APIRouter()
user_service = UserService(UserRepository())


@router.post("/login", response_model=LoginResponse, responses={401: {"model": ErrorResponse}})
async def login(login_request: LoginRequest):
    user = user_service.login_user(login_request.email, login_request.password)
    if user:
        return LoginResponse(message="Login successful", user_id=str(user.id))
    else:
        raise HTTPException(status_code=401, detail="Invalid credentials")


@router.post("/register", response_model=RegisterResponse, responses={400: {"model": ErrorResponse}})
async def register(register_request: RegisterRequest):
    registration_result = user_service.register_user(
        register_request.email,
        register_request.password,
        register_request.confirm_password
    )

    if "error" in registration_result:
        raise HTTPException(status_code=400, detail=registration_result["error"])

    return RegisterResponse(
        message=registration_result["message"],
        user_id=registration_result["user_id"]
    )
