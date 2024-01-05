import pytest
from fastapi.testclient import TestClient
from server import app
from utils.dbConnection import init_test_db
from utils.dbConnection import add_test_user

# Pytest fixture to run before each test
@pytest.fixture(autouse=True)
def setup():
    init_test_db()
    yield


client = TestClient(app)


def test_register_success():
    response = client.post("/user/register", json={
        "email": "testuser@example.com",
        "password": "password123",
        "confirm_password": "password123"
    })
    assert response.status_code == 200
    assert "user_id" in response.json()


def test_register_with_existing_email():
    # Assuming testuser@example.com already registered
    response = client.post("/user/register", json={
        "email": "testuser@example.com",
        "password": "newpassword123",
        "confirm_password": "newpassword123"
    })
    assert response.status_code == 400
    assert "error" in response.json()


def test_register_with_mismatched_passwords():
    response = client.post("/user/register", json={
        "email": "newuser@example.com",
        "password": "password123",
        "confirm_password": "password321"
    })
    assert response.status_code == 400
    assert "error" in response.json()


def test_register_with_invalid_email():
    response = client.post("/user/register", json={
        "email": "invalid-email",
        "password": "password123",
        "confirm_password": "password123"
    })
    assert response.status_code == 422  # HTTP 422 for validation errors





def test_login_success():
    # Add a user first
    add_test_user("testuser@example.com", "password123")

    # Now attempt to log in
    response = client.post("/user/login", json={
        "email": "testuser@example.com",
        "password": "password123"
    })
    assert response.status_code == 200
    assert "user_id" in response.json()


def test_login_with_wrong_password():
    # Add a user first
    add_test_user("testuser@example.com", "password123")

    # Now attempt to log in with the wrong password
    response = client.post("/user/login", json={
        "email": "testuser@example.com",
        "password": "wrongpassword"
    })
    assert response.status_code == 401
    assert "detail" in response.json()


def test_login_with_nonexistent_email():
    response = client.post("/user/login", json={
        "email": "nonexistent@example.com",
        "password": "password123"
    })
    assert response.status_code == 401
    assert "detail" in response.json()
