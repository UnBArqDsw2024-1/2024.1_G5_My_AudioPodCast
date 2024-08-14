from sqlalchemy import Column, Integer, String, Enum as SqlEnum
from sqlalchemy.orm import relationship
from app.enum.user_permission_enum import UserPermission
from app.database import Base
from app.strategies.user_permission_strategy import UserPermissionStrategy

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    age = Column(Integer)
    email = Column(String, unique=True, index=True)
    password = Column(String)
    permission = Column(SqlEnum(UserPermission), index=True)
    
    playlists = relationship("Playlist", back_populates="owner")
    ratings = relationship("Rating", back_populates="user")
    host = relationship("Host", back_populates="user")

    def set_permission_strategy(self, strategy: UserPermissionStrategy):
        self.permission_strategy = strategy

    def access_resources(self):
        if self.permission_strategy:
            return self.permission_strategy.access_resources()
        return "Permissão não definida."
