## Aqui está o código do nosso padrão comportamental Strategy:

```python



from abc import ABC, abstractmethod

class UserPermissionStrategy(ABC):
    @abstractmethod
    def access_resources(self):
        pass

class AdminUserPermissionStrategy(UserPermissionStrategy):
    def access_resources(self):
        return "Acesso completo a todos os recursos."

class DefaultUserPermissionStrategy(UserPermissionStrategy):
    def access_resources(self):
        return "Acesso limitado a recursos padrão."

class HostUserPermissionStrategy(UserPermissionStrategy):
    def access_resources(self):
        return "Acesso a recursos específicos do host."


class User:
    def __init__(self):
        self.name = ""
        self.age = 0
        self.email = ""
        self.password = ""
        self.permission_strategy = None

    def set_permission_strategy(self, strategy: UserPermissionStrategy):
        self.permission_strategy = strategy

    def access_resources(self):
        if self.permission_strategy:
            return self.permission_strategy.access_resources()
        return "Permissão não definida."








