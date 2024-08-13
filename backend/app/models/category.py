from sqlalchemy import Column, Integer, String, Table, ForeignKey
from sqlalchemy.orm import relationship
from ..database import Base

# Define the association table
podcast_categories = Table(
    'podcast_categories',
    Base.metadata,
    Column('podcast_id', Integer, ForeignKey('podcasts.id'), primary_key=True),
    Column('category_id', Integer, ForeignKey('categories.id'), primary_key=True)
)

class Category(Base):
    __tablename__ = "categories"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    description = Column(String)
    
    podcasts = relationship("Podcast", secondary=podcast_categories, back_populates="categories")
