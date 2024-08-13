from sqlalchemy.orm import Session
from app.api.repository.user import create_user as repo_create_user
from app.api.repository.user import read_all_user as repo_read_all_user
from app.api.repository.user import read_user as repo_read_user
from app.api.repository.user import update_user as repo_update_user
from app.api.schemas.user import UserCreate

def create_user(db: Session, user: UserCreate):
    return repo_create_user(db, user)

def read_all_user(db: Session):
    return repo_read_all_user(db)

def read_user(db: Session, user_id: int):
    return repo_read_user(db, user_id)

def update_user(db: Session, user_id: int, user: UserCreate):
    return repo_update_user(db, user_id, user)