from flask import request
from userService import UserService
from userRepository import UserRepository
from your_database_session import session  # Import your database session

user_service = UserService(UserRepository(session))

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    user_dto = LoginDTO(data['email'], data['password'])
    user = user_service.verify_user(user_dto.email, user_dto.password)

    if user:
        # Generate token or return success response
        return {"message": "Login successful"}, 200
    else:
        return {"message": "Invalid credentials"}, 401
