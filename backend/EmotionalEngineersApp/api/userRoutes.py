# api/userRoutes.py

from fastapi import APIRouter, Depends, HTTPException, Request
from starlette.status import HTTP_401_UNAUTHORIZED

from dal.userRepository import UserRepository
from dto.userDto import LoginRequest, LoginResponse, RegisterRequest, RegisterResponse, ErrorResponse
from dto.userDto import UserProfileUpdateRequest, MessageResponse
from services.userService import UserService

router = APIRouter()
user_service = UserService(UserRepository())


def get_user_service() -> UserService:
    return UserService(UserRepository())


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


@router.put("/profile", response_model=MessageResponse)
async def update_user_profile(
        profile_update_request: UserProfileUpdateRequest,
        request: Request,
        user_service: UserService = Depends(get_user_service)
):
    user_email = request.session.get("user_email")
    if not user_email:
        raise HTTPException(status_code=HTTP_401_UNAUTHORIZED, detail="Unauthorized")

    result = user_service.update_profile(
        email=user_email,
        name=profile_update_request.name,
        date_of_birth=profile_update_request.date_of_birth,
        country=profile_update_request.country
    )
    if "error" in result:
        raise HTTPException(status_code=404, detail=result["error"])
    return MessageResponse(message=result["message"])
