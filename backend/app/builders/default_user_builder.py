from app.enum.user_permission_enum import UserPermission
from app.builders.user_builder import UserBuilder

class DefaultUserBuilder(UserBuilder):
    def __init__(self):
        super().__init__()
        self.user = None  # Inicializa o atributo user

    def set_user(self, user):
        self.user = user
        return self
    
    def build(self):
        self.user.permission = UserPermission.USER_PERMISSION
        return self.user