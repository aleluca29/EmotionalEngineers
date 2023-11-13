from werkzeug.security import check_password_hash

class UserService:
    def __init__(self, user_repository):
        self.user_repository = user_repository

    def verify_user(self, email, password):
        user = self.user_repository.find_by_email(email)
        if user and check_password_hash(user.password_hash, password):
            return user
        return None
