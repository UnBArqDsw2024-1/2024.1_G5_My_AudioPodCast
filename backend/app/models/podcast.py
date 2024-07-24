from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from app.database import Base

class Podcast(Base):
    __tablename__ = "podcasts"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    description = Column(String)
    rating = Column(Integer)
    
    categories = relationship("Category", secondary="podcast_categories", back_populates="podcasts")
    ratings = relationship("Rating", back_populates="podcast")
    hosts = relationship("Host", back_populates="podcasts")
