class UserRepository:
    def __init__(self, session):
        self.session = session

    def find_by_email(self, email):
        return self.session.query(User).filter(User.email == email).first()
