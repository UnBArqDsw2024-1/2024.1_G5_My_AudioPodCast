from sqlalchemy.orm import Session
from app.models import Podcast
from app.api.schemas.podcast import PodcastCreate

def create_podcast(db: Session, podcast: PodcastCreate):
    db_podcast = Podcast(**podcast.dict())
    db.add(db_podcast)
    db.commit()
    db.refresh(db_podcast)
    return db_podcast

def read_all_podcast(db: Session):
    return db.query(Podcast).all()

def read_podcast(db: Session, podcast_id: int):
    return db.query(Podcast).filter(Podcast.id == podcast_id).first()

def update_podcast(db: Session, podcast_id: int, podcast: PodcastCreate):
    db_podcast = db.query(Podcast).filter(Podcast.id == podcast_id)
    db_podcast.update(podcast.dict())
    db.commit()
    return db_podcast.first()