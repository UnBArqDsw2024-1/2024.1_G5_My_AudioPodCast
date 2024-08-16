from sqlalchemy.orm import Session
from app.api.repository.podcast import create_podcast as repo_create_podcast
from app.api.repository.podcast import read_all_podcast as repo_read_all_podcast
from app.api.repository.podcast import read_podcast as repo_read_podcast
from app.api.repository.podcast import update_podcast as repo_update_podcast
from app.api.schemas.podcast import PodcastCreate
from app.strategies.validation_strategy import ValidationStrategy

class PodcastService:
    def create_podcast(self, db: Session, podcast: PodcastCreate, validation_strategy: ValidationStrategy):
        validation_strategy.validate(podcast)
        return repo_create_podcast(db, podcast)

def read_all_podcast(db: Session):
    return repo_read_all_podcast(db)

def read_podcast(db: Session, podcast_id: int):
    return repo_read_podcast(db, podcast_id)

def update_podcast(db: Session, podcast_id: int, podcast: PodcastCreate , validation_strategy: ValidationStrategy):
    validation_strategy.validate(podcast)
    return repo_update_podcast(db, podcast_id, podcast)