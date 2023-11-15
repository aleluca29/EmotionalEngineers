from dal.userRepository import UserRepository
from werkzeug.security import check_password_hash

class UserService:
    def __init__(self, user_repository: UserRepository):
        self.user_repository = user_repository

    def login_user(self, email: str, password: str):
        user = self.user_repository.find_by_email(email)
        if user and check_password_hash(user.password_hash, password):
            return user
        return None
