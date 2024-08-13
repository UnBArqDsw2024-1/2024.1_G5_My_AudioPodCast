from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.api.service.user import create_user, read_all_user, read_user
from app.api.schemas.user import UserCreate, UserInDB
from app.database import get_db

router = APIRouter()

@router.post("/users", response_model=UserInDB)
def create_user_endpoint(user: UserCreate, db: Session = Depends(get_db)):
    return create_user(db=db, user=user)

@router.get("/users/get")
def read_all_user_endpoint(db: Session = Depends(get_db)):
    return read_all_user(db=db)

@router.get("/users/get/{user_id}")
def read_user_endpoint(user_id: int, db: Session = Depends(get_db)):
    user = read_user(db=db, user_id=user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user