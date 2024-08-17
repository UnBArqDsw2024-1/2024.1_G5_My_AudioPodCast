from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from ..database import Base
from .category import podcast_categories  # Import the association table


class Podcast(Base):
    __tablename__ = "podcasts"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    description = Column(String)
    rating = Column(Integer)
    host_id = Column(Integer, ForeignKey("hosts.id")) 
    
    categories = relationship("Category", secondary="podcast_categories", back_populates="podcasts")
    ratings = relationship("Rating", back_populates="podcast")
    host = relationship("Host", back_populates="podcasts")  # Corrigido para 'host'

    episodes = relationship("Episode", back_populates="podcast")


    def access(self):
        print("Accessing podcast...")

    def listen(self):
        print("Listening to podcast..")

    def create(self):
        print("Adding new podcast...")