from app.strategies.user_permission_strategy import UserPermissionStrategy

class DefaultUserPermissionStrategy(UserPermissionStrategy):
    def access_resources(self):
        return "default"
