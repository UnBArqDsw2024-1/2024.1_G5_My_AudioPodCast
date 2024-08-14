from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.api.service.article import create_article, read_all_article, read_article, update_article
from app.api.schemas.article import ArticleCreate

router = APIRouter()

@router.get("/articles/get")
def read_all_article_endpoint(db: Session = Depends(get_db)):
    return read_all_article(db=db)

@router.get("/articles/get/{article_id}")
def read_article_endpoint(article_id: int, db: Session = Depends(get_db)):
    article = read_article(db=db, article_id=article_id)
    if not article:
        raise HTTPException(status_code=404, detail="Article not found")
    return article

@router.post("/articles/create")
def create_article_endpoint(article: ArticleCreate, db: Session = Depends(get_db)):
    return create_article(db=db, article=article)

@router.put("/articles/update/{article_id}")
def update_article_endpoint(article_id: int, article: ArticleCreate, db: Session = Depends(get_db)):
    return update_article(db=db, article_id=article_id, article=article)