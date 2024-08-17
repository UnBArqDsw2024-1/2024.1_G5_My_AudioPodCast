from abc import ABC, abstractmethod
from app.api.schemas.podcast import PodcastCreate


class ValidationStrategy(ABC):
    @abstractmethod
    def validate(self, podcast: PodcastCreate):
        pass

