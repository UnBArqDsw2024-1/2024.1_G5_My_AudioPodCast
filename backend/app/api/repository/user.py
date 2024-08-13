from sqlalchemy.orm import Session
from app.models import User
from app.api.schemas.user import UserCreate

def create_user(db: Session, user: UserCreate):
    db_user = User(name=user.name, age=user.age, email=user.email, password=user.password, permission=user.permission)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def read_all_user(db: Session):
    return db.query(User).all()

def read_user(db: Session, user_id: int):
    return db.query(User).filter(User.id == user_id).first()

def update_user(db: Session, user_id: int, user: UserCreate):
    db_user = db.query(User).filter(User.id == user_id)
    db_user.update(user.dict())
    db.commit()
    return db_user.first()