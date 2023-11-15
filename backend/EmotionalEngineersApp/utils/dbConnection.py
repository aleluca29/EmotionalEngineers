import os
from mongoengine import connect

# Get the password from environment variable
mongodb_password = os.getenv('MONGO_DB_PASSWORD')

# If using f-string, ensure you handle the case where the environment variable might not be set
if mongodb_password is None:
    raise ValueError("MongoDB password not set in environment variables")

mongodb_connection_string = (
    f'mongodb://MSAalebia:{mongodb_password}@'
    'msa.cluster-clx6f6bdbck7.eu-west-3.docdb.amazonaws.com:27017/?'
)


def init_db():
    connect('msa', host=mongodb_connection_string)


