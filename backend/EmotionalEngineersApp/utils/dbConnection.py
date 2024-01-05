import logging
import os

from models.userModel import User
from mongoengine import connect, disconnect
from werkzeug.security import generate_password_hash

# Constants
PROD_DB_NAME = 'msa'
PROD_DB_URI = f'mongodb://MSAalebia:{os.getenv("MONGO_DB_PASSWORD")}@msa.cluster-clx6f6bdbck7.eu-west-3.docdb.amazonaws.com:27017/?tls=true&tlsCAFile=utils/global-bundle.pem'
TEST_DB_NAME = os.getenv('TEST_DB_NAME', 'test_db')
TEST_DB_URI = os.getenv('TEST_DB_URI', 'mongodb://localhost:27017/test_db')

# Set up basic configuration for logging
logging.basicConfig(level=logging.INFO)


def init_db():
    if not os.getenv('MONGO_DB_PASSWORD'):
        raise ValueError("MongoDB password not set in environment variables")

    try:
        connect(PROD_DB_NAME, host=PROD_DB_URI)
        logging.info("Connected to MongoDB successfully.")
    except Exception as e:
        logging.error(f"Failed to connect to MongoDB: {e}")


def init_test_db():
    disconnect()  # Disconnect from the main DB if connected
    try:
        conn = connect(TEST_DB_NAME, host=TEST_DB_URI, alias='default')
        conn.drop_database(TEST_DB_NAME)  # Drop the database to clear all data
        logging.info("Connected to Test MongoDB successfully.")
    except Exception as e:
        logging.error(f"Failed to connect to Test MongoDB: {e}")


def add_test_user(email: str, password: str):
    # Generate a hashed password
    hashed_password = generate_password_hash(password)

    # Create and save the new user
    test_user = User(email=email, password_hash=hashed_password)
    test_user.save()
