from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.api.service.user import create_user
from app.api.schemas.user import UserCreate, UserInDB
from app.database import get_db

router = APIRouter()

@router.post("/users", response_model=UserInDB)
def create_user_endpoint(user: UserCreate, db: Session = Depends(get_db)):
    return create_user(db=db, user=user)