from sqlalchemy import Column, Integer, ForeignKey, String
from sqlalchemy.orm import relationship
from ..database import Base

class Host(Base):
    __tablename__ = "hosts"
    
    id = Column(Integer, primary_key=True, index=True)
    biography = Column(String)
    
    user_id = Column(Integer, ForeignKey("users.id"))  # Adicionando a ForeignKey para User

    podcasts = relationship("Podcast", back_populates="host")  # Corrigido para 'host'
    user = relationship("User", back_populates="hosts")
