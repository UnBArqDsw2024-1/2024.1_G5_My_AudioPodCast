from backend.app.enum.user_permission_enum import UserPermission
from backend.app.builders.user_builder import UserBuilder
from backend.app.strategies.admin_user_permission_strategy import AdminPermissionStrategy

class AdminUserBuilder(UserBuilder):
      def build(self):
        self.user.permission = AdminPermissionStrategy()
        return self.user