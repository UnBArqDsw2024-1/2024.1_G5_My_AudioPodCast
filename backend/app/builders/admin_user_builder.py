from backend.app.enum.user_permission_enum import UserPermission
from backend.app.builders.user_builder import UserBuilder

class AdminUserBuilder(UserBuilder):
      def build(self):
        self.user.permission = UserPermission.ADMIN
        return self.user