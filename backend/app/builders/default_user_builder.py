from backend.app.enum.user_permission_enum import UserPermission
from backend.app.builders.user_builder import UserBuilder
from backend.app.strategies.default_user_permission_strategy import DefaultPermissionStrategy

class DefaultUserBuilder(UserBuilder):
    def build(self):
        self.user.permission = DefaultPermissionStrategy()
        return self.user