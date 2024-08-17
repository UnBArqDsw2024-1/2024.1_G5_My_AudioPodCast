from pydantic import BaseModel
from app.enum.user_permission_enum import UserPermission

class UserBase(BaseModel):
    name: str
    age: int
    email: str

class UserCreate(UserBase):
    password: str
    permission: UserPermission

class UserInDB(UserBase):
    id: int

    class Config:
        orm_mode = True
