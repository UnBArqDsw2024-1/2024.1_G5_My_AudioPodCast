from enum import Enum

class UserPermission(Enum):
    ADMIN_PERMISSION = "admin"
    USER_PERMISSION = "default"
    HOST_PERMISSION = "host"
