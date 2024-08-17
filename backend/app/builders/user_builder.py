from app.models.user import User

class UserBuilder:
    def __init__(self):
        self._user = User()
    
    def get_name(self):
        return self._user.name
    
    def set_name(self, name: str):
        self._user.name = name
        return self

    def get_age(self):
        return self._user.age
        
    def set_age(self, age: int):
        self._user.age = age
        return self

    def get_email(self):
        return self._user.email

    def set_email(self, email: str):
        self._user.email = email
        return self
    
    def get_password(self):
        return self._user.password
    
    def set_password(self, password: str):
        self._user.password = password
        return self

    def build(self) -> User:
        return self._user
    
    def __str__(self):
        return (f"UserBuilder("
                f"name={self._user.name}, "
                f"age={self._user.age}, "
                f"email={self._user.email}, "
                f"password={self._user.password}, "
                f"permission={self._user.permission})")
