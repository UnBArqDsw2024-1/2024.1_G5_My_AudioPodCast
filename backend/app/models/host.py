from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from ..database import Base

class Host(Base):
    __tablename__ = "hosts"
    
    id = Column(Integer, primary_key=True, index=True)
    biography = Column(String)

    user_id = Column(Integer, ForeignKey("users.id"))
    
    podcasts = relationship("Podcast", back_populates="hosts")
    user = relationship("User", back_populates="hosts")
