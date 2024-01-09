from fastapi import FastAPI, Request, Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from starlette.middleware.sessions import SessionMiddleware
from starlette.status import HTTP_401_UNAUTHORIZED
from tensorboard.uploader.auth import authenticate_user

from api.chatRoutes import router as chat_router
from api.moodRoutes import router as mood_router
from api.userRoutes import router as user_router
from utils.dbConnection import init_db

app = FastAPI()

# Initialize database
init_db()

# Include routers
app.include_router(user_router, prefix="/user", tags=["Users"])
app.include_router(chat_router, prefix="/chat", tags=["Chat"])
app.include_router(mood_router, prefix="/mood", tags=["Mood"])

# Configure a secret key for session cookies
app.add_middleware(SessionMiddleware, secret_key="your_secret_key")

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


async def get_current_user(request: Request):
    user_email = request.session.get("user_email")
    if not user_email:
        raise HTTPException(
            status_code=HTTP_401_UNAUTHORIZED,
            detail="Unauthorized",
        )
    return user_email


@app.post("/login")
async def login(request: Request, form_data: OAuth2PasswordRequestForm = Depends()):
    # Authenticate and set user_email in session
    user = authenticate_user(form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
        )
    request.session["user_email"] = user.email
    return {"message": "Login successful"}


@app.get("/users/me")
async def read_users_me(current_user: str = Depends(get_current_user)):
    return {"email": current_user}
