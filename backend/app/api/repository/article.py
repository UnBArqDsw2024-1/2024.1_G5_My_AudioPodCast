from sqlalchemy.orm import Session
from app.models import Article
from app.api.schemas.article import ArticleCreate

def create_article(db: Session, article: ArticleCreate):
    db_article = Article(title=article.title, content=article.content, type_article=article.type_article, create_at=article.create_at)
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
    db_article.update(article.dict())
    db.commit()
    return db_article.first()