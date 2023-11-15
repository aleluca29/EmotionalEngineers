from models.userModel import User

class UserRepository:
    def find_by_email(self, email: str):
        return User.objects(email=email).first()
