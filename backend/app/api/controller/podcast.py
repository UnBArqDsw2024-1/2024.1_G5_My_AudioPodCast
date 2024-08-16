from typing import List
from app.strategies.podcast_validation_strategy import BasicValidationStrategy
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.api.schemas.podcast import PodcastCreate, PodcastInDB
from app.database import get_db
from app.api.service.podcast import PodcastService
from app.api.service.podcast import read_all_podcast, read_podcast, update_podcast

router = APIRouter(tags=["Podcast"])

@router.post("/podcasts", response_model=PodcastInDB)
def create_podcast_endpoint(podcast_create: PodcastCreate, db: Session = Depends(get_db)):
    try:
        podcast = PodcastService().create_podcast(db=db, podcast=podcast_create, validation_strategy=BasicValidationStrategy())
        return podcast
    except Exception as e:
        raise HTTPException(status_code=422, detail=f"{e}")


@router.get("/podcasts/get")
def get_all_podcasts(db: Session = Depends(get_db)):
    return read_all_podcast(db=db)

@router.get("/podcasts/get/{user_id}")
def read_podcast_endpoint(podcast_id: int, db: Session = Depends(get_db)):
    podcast = read_podcast(db=db,podcast_id=podcast_id)
    if not podcast:
        raise HTTPException(status_code=404, detail="Podcast not found")
    return podcast

@router.put("/podcasts/update/{podcast_id}")
def update_podcast_endpoint(podcast_id: int, podcast: PodcastCreate, db: Session = Depends(get_db)):
    try:
        podcast = update_podcast(db=db, podcast_id=podcast_id, podcast=podcast, validation_strategy=BasicValidationStrategy())
        if not podcast:
            raise HTTPException(status_code=404, detail="Podcast not found")
        return podcast
    except Exception as e:
        if ValueError:
            raise HTTPException(status_code=422, detail=f"{e}")
        raise e