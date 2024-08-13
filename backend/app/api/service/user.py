from sqlalchemy.orm import Session
from app.api.repository.user import create_user as repo_create_user
from app.api.schemas.user import UserCreate

def create_user(db: Session, user: UserCreate):
    return repo_create_user(db, user)
