from sqlalchemy.orm import Session
from app.models import Article
from app.api.schemas.article import ArticleCreate
from datetime import datetime

def create_article(db: Session, article: ArticleCreate):
    create_at_date = datetime.strptime(article.create_at, "%Y-%m-%d").date()

    db_article = Article(title=article.title, content=article.content, type_article=article.type_article, create_at=create_at_date)
    db.add(db_article)
    db.commit()
    db.refresh(db_article)
    return db_article

def read_all_article(db: Session):
    return db.query(Article).all()

def read_article(db: Session, article_id: int):
    return db.query(Article).filter(Article.id == article_id).first()

def update_article(db: Session, article_id: int, article: ArticleCreate):
    db_article = db.query(Article).filter(Article.id == article_id)
    
    article_data = article.dict()
    article_data['create_at'] = datetime.strptime(article_data['create_at'], "%Y-%m-%d").date()

    db_article.update(article_data)
    db.commit()
    return db_article.first()