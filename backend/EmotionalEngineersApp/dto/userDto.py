from datetime import date

from pydantic import BaseModel, EmailStr, Field


class RegisterRequest(BaseModel):
    email: EmailStr
    password: str
    confirm_password: str


class RegisterResponse(BaseModel):
    message: str
    user_id: str


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class LoginResponse(BaseModel):
    message: str
    user_id: str


class UserProfileUpdateRequest(BaseModel):
    name: str = Field(..., min_length=1)
    date_of_birth: date
    country: str = Field(..., min_length=2)


class UserProfileResponse(BaseModel):
    name: str
    date_of_birth: date
    country: str


class MessageResponse(BaseModel):
    message: str


class ErrorResponse(BaseModel):
    error: str
