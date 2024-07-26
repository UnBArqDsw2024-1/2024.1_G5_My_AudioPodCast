from app.strategies.user_permission_strategy import UserPermissionStrategy

class AdminUserPermissionStrategy(UserPermissionStrategy):
    def access_resources(self):
        return "admin"
