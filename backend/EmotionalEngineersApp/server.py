from fastapi import FastAPI
from utils.dbConnection import init_db
from api.userRoutes import router as user_router

app = FastAPI()

# Initialize database
init_db()

# Include routers
app.include_router(user_router, prefix="/user", tags=["Users"])
