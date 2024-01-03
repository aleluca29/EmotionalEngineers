from pydantic import BaseModel


class RegisterRequest(BaseModel):
    email: str
    password: str
    confirm_password: str


class RegisterResponse(BaseModel):
    message: str
    user_id: str


class LoginRequest(BaseModel):
    email: str
    password: str


class LoginResponse(BaseModel):
    message: str
    user_id: str


class ErrorResponse(BaseModel):
    error: str
