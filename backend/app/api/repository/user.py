from sqlalchemy.orm import Session
from app.models import User
from app.api.schemas.user import UserCreate

def create_user(db: Session, user: UserCreate):
    db_user = User(name=user.name, age=user.age, email=user.email, password=user.password, permission=user.permission)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user