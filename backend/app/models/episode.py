from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from ..database import Base

class Episode(Base):
    __tablename__ = "episodes"
    
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    description = Column(String)
    createDate = Column(String)  # Consider using DateTime if appropriate
    duration = Column(Integer)
    subject = Column(String)
    podcast_id = Column(Integer, ForeignKey("podcasts.id"))

    ratings = relationship("Rating", back_populates="episode")
    podcast = relationship("Podcast", back_populates="episodes")
