import logging
import os

from mongoengine import connect

# Set up basic configuration for logging
logging.basicConfig(level=logging.INFO)

mongodb_password = os.getenv('MONGO_DB_PASSWORD')

if mongodb_password is None:
    raise ValueError("MongoDB password not set in environment variables")

mongodb_connection_string = (
    f'mongodb://MSAalebia:{mongodb_password}@'
    'msa.cluster-clx6f6bdbck7.eu-west-3.docdb.amazonaws.com:27017/?'
    'tls=true&tlsCAFile=utils/global-bundle.pem'
)


def init_db():
    try:
        connect('msa', host=mongodb_connection_string)
        logging.info("Connected to MongoDB successfully.")
    except Exception as e:
        logging.error(f"Failed to connect to MongoDB: {e}")


# Initialize the database connection
init_db()
