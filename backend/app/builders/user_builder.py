from app.models.user import User

class UserBuilder:
    def __init__(self):
        self._user = User()
    
    def set_name(self, name: str):
        self._user.name = name
        return self

    def set_age(self, age: int):
        self._user.age = age
        return self

    def set_email(self, email: str):
        self._user.email = email
        return self

    def set_password(self, password: str):
        self._user.password = password
        return self

    def build(self) -> User:
        return self._user
