from models import userModel
from data_access import userRepository

def create_user(user: userModel.UserCreate):
    # Business logic for creating a user
    hashed_password = hash_password(user.password)
    user.password = hashed_password
    return userRepository.create(user)

def authenticate_user(credentials: userModel.UserLogin):
    # Business logic for authenticating a user
    user = userRepository.get_user_by_username(credentials.username)
    if not user:
        return None
    if verify_password(credentials.password, user.password):
        return user
    return None

def hash_password(password: str) -> str:
    # Use a hashing library, like bcrypt, to hash the password
    pass

def verify_password(plain_password: str, hashed_password: str) -> bool:
    # Use the hashing library to verify the password against its hash
    pass
