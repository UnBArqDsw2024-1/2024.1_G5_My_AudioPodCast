from app.strategies.user_permission_strategy import UserPermissionStrategy

class HostUserPermissionStrategy(UserPermissionStrategy):
    def access_resources(self):
        return "host"