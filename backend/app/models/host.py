from sqlalchemy import Column, Integer, ForeignKey, String
from sqlalchemy.orm import relationship
from ..database import Base

class Host(Base):
    __tablename__ = "hosts"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    podcast_id = Column(Integer, ForeignKey('podcasts.id'))  # Adiciona a ForeignKey aqui

    podcasts = relationship("Podcast", back_populates="hosts")
