from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.api.service.podcast import create_podcast, read_all_podcast, read_podcast, update_podcast
from app.api.schemas.podcast import PodcastCreate, PodcastInDB
from app.database import get_db

router = APIRouter(tags=["Podcast"])

@router.post("/podcasts", response_model=PodcastInDB)
def create_podcast_endpoint(podcast: PodcastCreate, db: Session = Depends(get_db)):
    return create_podcast(db=db, podcast=podcast)

@router.get("/podcasts/get")
def read_all_podcast_endpoint(db: Session = Depends(get_db)):
    return read_all_podcast(db=db)

@router.get("/podcasts/get/{user_id}")
def read_podcast_endpoint(podcast_id: int, db: Session = Depends(get_db)):
    podcast = read_podcast(db=db, podcast_id=podcast_id)
    if not podcast:
        raise HTTPException(status_code=404, detail="Podcast not found")
    return podcast

@router.put("/podcasts/update/{podcast_id}")
def update_podcast_endpoint(podcast_id: int, podcast: PodcastCreate, db: Session = Depends(get_db)):
    podcast = update_podcast(db=db, podcast_id=podcast_id, podcast=podcast)
    if not podcast:
        raise HTTPException(status_code=404, detail="Podcast not found")
    return podcast