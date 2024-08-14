from sqlalchemy.orm import Session
from app.models import User
from app.builders.default_user_builder import DefaultUserBuilder
from app.builders.admin_user_builder import AdminUserBuilder
from app.builders.host_user_builder import HostUserBuilder
from app.enum.user_permission_enum import UserPermission
from app.api.schemas.user import UserCreate

def create_user(db: Session, user: UserCreate):
    # Utilização do GoF Criacional Builder definido para o projeto:
    user_builder = getAppropriateUserBuilder(user=user).build()

    db_user = User(name=user_builder.name, age=user_builder.age, email=user_builder.email, password=user_builder.password, permission=user_builder.permission)
    
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

def getAppropriateUserBuilder(user: UserCreate):
    if user.permission == UserPermission.ADMIN_PERMISSION:
        builder = AdminUserBuilder()
    elif user.permission == UserPermission.USER_PERMISSION:
        builder = DefaultUserBuilder()
    elif user.permission == UserPermission.HOST_PERMISSION:
        builder = HostUserBuilder()

    return builder.set_user(user).set_name(user.name).set_age(user.age).set_email(user.email).set_password(user.password)
