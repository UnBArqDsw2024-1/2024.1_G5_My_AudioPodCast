from sqlalchemy.orm import Session
from app.api.repository.article import create_article as repo_create_article
from app.api.repository.article import read_all_article as repo_read_all_article
from app.api.repository.article import read_article as repo_read_article
from app.api.repository.article import update_article as repo_update_article
from app.api.schemas.article import ArticleCreate

def create_article(db: Session, article: ArticleCreate):
    return repo_create_article(db, article)

def read_all_article(db: Session):
    return repo_read_all_article(db)

def read_article(db: Session, article_id: int):
    return repo_read_article(db, article_id)

def update_article(db: Session, article_id: int, article: ArticleCreate):
    return repo_update_article(db, article_id, article)