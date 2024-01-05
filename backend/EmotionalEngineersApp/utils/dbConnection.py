import logging
import os

from mongoengine import connect, disconnect
from werkzeug.security import generate_password_hash
from models.userModel import User
from mongoengine import connect

# Set up basic configuration for logging
logging.basicConfig(level=logging.INFO)


def init_db():
    mongodb_password = os.getenv('MONGO_DB_PASSWORD')
    if mongodb_password is None:
        raise ValueError("MongoDB password not set in environment variables")

    mongodb_connection_string = (
        f'mongodb://MSAalebia:{mongodb_password}@'
        'msa.cluster-clx6f6bdbck7.eu-west-3.docdb.amazonaws.com:27017/?'
        'tls=true&tlsCAFile=utils/global-bundle.pem'
    )

    try:
        connect('msa', host=mongodb_connection_string)
        logging.info("Connected to MongoDB successfully.")
    except Exception as e:
        logging.error(f"Failed to connect to MongoDB: {e}")


def init_test_db():
    test_db_name = os.getenv('TEST_DB_NAME', 'test_db')
    test_db_uri = os.getenv('TEST_DB_URI', 'mongodb://localhost:27017/test_db')

    disconnect()  # Disconnect from the main DB if connected
    try:
        conn = connect(test_db_name, host=test_db_uri, alias='default')
        conn.drop_database(test_db_name)  # Drop the database to clear all data
        logging.info("Connected to Test MongoDB successfully.")
    except Exception as e:
        logging.error(f"Failed to connect to Test MongoDB: {e}")


def add_test_user(email: str, password: str, db_name='test_db', db_uri='mongodb://localhost:27017/test_db'):
    # Establish a connection to the test database
    connect(db_name, host=db_uri, alias='default')

    # Generate a hashed password
    hashed_password = generate_password_hash(password)

    # Create and save the new user
    test_user = User(email=email, password_hash=hashed_password)
    test_user.save()

    # Disconnect after adding the user
    disconnect(alias='default')
