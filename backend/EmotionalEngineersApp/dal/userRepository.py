from models.userModel import User


class UserRepository:
    def find_by_email(self, email: str):
        return User.objects(email=email).first()

    def update_user_profile(self, user: User, name: str, date_of_birth, country: str):
        user.update(set__name=name, set__date_of_birth=date_of_birth, set__country=country)
