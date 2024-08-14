from ..database import Base
from sqlalchemy import Column, Integer, Date, String

class Article(Base):
    __tablename__ = "articles"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    content = Column(String, nullable=False)
    type_article = Column(String, nullable=False)
    create_at = Column(Date, nullable=False)
