from sqlalchemy import Column, Integer, String
from your_orm_base import Base  # Import your ORM base class

class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True)
    email = Column(String, unique=True, nullable=False)
    password_hash = Column(String, nullable=False)

    # Add more fields as needed
