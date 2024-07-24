import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '../../')))

from unittest.mock import MagicMock, patch
from app.builders.user_builder import UserBuilder

@patch('app.models.user.Base', autospec=True)
def test_user_builder_creation(mock_base):
    mock_base.return_value = MagicMock()

    user_builder = UserBuilder()
    assert isinstance(user_builder, UserBuilder)

@patch('app.models.user.Base', autospec=True)
def test_user_builder_set_name(mock_base):
    mock_base.return_value = MagicMock()

    user_builder = UserBuilder()
    user_builder.set_name("John Doe")
    user = user_builder.build()
    assert user.name == "John Doe"

@patch('app.models.user.Base', autospec=True)
def test_user_builder_set_age(mock_base):
    mock_base.return_value = MagicMock()

    user_builder = UserBuilder()
    user_builder.set_age(30)
    user = user_builder.build()
    assert user.age == 30

@patch('app.models.user.Base', autospec=True)
def test_user_builder_set_email(mock_base):
    mock_base.return_value = MagicMock()

    user_builder = UserBuilder()
    user_builder.set_email("john.doe@example.com")
    user = user_builder.build()
    assert user.email == "john.doe@example.com"

@patch('app.models.user.Base', autospec=True)
def test_user_builder_set_password(mock_base):
    mock_base.return_value = MagicMock()

    user_builder = UserBuilder()
    user_builder.set_password("securepassword")
    user = user_builder.build()
    assert user.password == "securepassword"

@patch('app.models.user.Base', autospec=True)
def test_user_builder_full_build(mock_base):
    mock_base.return_value = MagicMock()

    user_builder = UserBuilder()
    user_builder.set_name("John Doe").set_age(30).set_email("john.doe@example.com").set_password("securepassword")
    user = user_builder.build()
    assert user.name == "John Doe"
    assert user.age == 30
    assert user.email == "john.doe@example.com"
    assert user.password == "securepassword"
