from abc import ABC, abstractmethod

class UserPermissionStrategy(ABC):
    @abstractmethod
    def access_resources(self):
        pass
