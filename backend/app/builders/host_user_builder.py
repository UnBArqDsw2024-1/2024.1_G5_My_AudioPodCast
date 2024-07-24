from backend.app.enum.user_permission_enum import UserPermission
from backend.app.builders.user_builder import UserBuilder

class HostUserBuilder(UserBuilder):
     def build(self):
        self.user.permission = UserPermission.HOST
        return self.user