from app.models.podcast import Podcast

class PodcastFactory:
    @staticmethod
    def create_podcast(name: str, description: str, rating: int) -> Podcast:
        podcast = Podcast(
            name=name,
            description=description,
            rating=rating
        )
        return podcast