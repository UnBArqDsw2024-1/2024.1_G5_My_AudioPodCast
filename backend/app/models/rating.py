from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.database import Base

class Rating(Base):
    __tablename__ = "ratings"
    
    id = Column(Integer, primary_key=True, index=True)
    rating = Column(Integer)
    comment = Column(String)
    date = Column(String)  # Consider using DateTime if appropriate
    
    podcast_id = Column(Integer, ForeignKey("podcasts.id"))
    episode_id = Column(Integer, ForeignKey("episodes.id"))
    user_id = Column(Integer, ForeignKey("users.id"))
    
    user = relationship("User", back_populates="ratings")
    podcast = relationship("Podcast", back_populates="ratings")
    episode = relationship("Episode", back_populates="ratings")
