from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from ..database import Base

class Podcast(Base):
    __tablename__ = "podcasts"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    description = Column(String)
    rating = Column(Integer)
    
    categories = relationship("Category", secondary="podcast_categories", back_populates="podcasts")
    ratings = relationship("Rating", back_populates="podcast")
    hosts = relationship("Host", back_populates="podcasts")
    
    
    
    ### GoFs Estruturais Facade
    
    def access(self):
        print("Accessing podcast...")

    def listen(self):
        print("Listening to podcast..")

    def create(self):
        print("Adding new podcast...")
    
        
        