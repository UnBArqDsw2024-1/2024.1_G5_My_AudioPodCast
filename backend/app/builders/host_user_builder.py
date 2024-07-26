from backend.app.enum.user_permission_enum import UserPermission
from backend.app.builders.user_builder import UserBuilder
from backend.app.strategies.host_user_permission_strategy import HostPermissionStrategy

class HostUserBuilder(UserBuilder):
     def build(self):
        self.user.permission = HostPermissionStrategy()
        return self.user