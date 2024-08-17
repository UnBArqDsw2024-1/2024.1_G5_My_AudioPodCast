from app.strategies.validation_strategy import ValidationStrategy
from app.api.schemas.podcast import PodcastCreate

class BasicValidationStrategy(ValidationStrategy):
    def validate(self, podcast: PodcastCreate):
        if not podcast.name or not podcast.description:
            raise ValueError("Name and description are required")
        elif not (0 <= podcast.rating <= 5):
            raise ValueError("Rating must be between 0 and 5")
        
