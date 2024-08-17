from datetime import datetime
import pytest
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.database import Base, get_db
from app.api.repository.article import create_article, read_all_article, read_article, update_article
from app.api.schemas.article import ArticleCreate
from app.main import app

SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base.metadata.create_all(bind=engine)

@pytest.fixture(scope="function")
def db():
    session = TestingSessionLocal()
    try:
        yield session
    finally:
        session.close()

def override_get_db():
    try:
        db = TestingSessionLocal()
        yield db
    finally:
        db.close()

app.dependency_overrides[get_db] = override_get_db

def test_create_article(db):
    article_data = ArticleCreate(
        title="Test Article",
        content="Test Content",
        type_article="News",
        create_at="2024-01-01"
    )
    article = create_article(db=db, article=article_data)
    assert article.title == "Test Article"
    assert article.content == "Test Content"

def test_read_all_articles(db):
    articles = read_all_article(db=db)
    assert isinstance(articles, list)
    assert len(articles) > 0

def test_read_article(db):
    article = read_article(db=db, article_id=1)
    assert article is not None
    assert article.id == 1

def test_update_article(db):
    article_data = ArticleCreate(
        title="Updated Article",
        content="Updated Content",
        type_article="Blog",
        create_at="2024-01-02"
    )
    updated_article = update_article(db=db, article_id=1, article=article_data)

    assert updated_article.title == "Updated Article"
    assert updated_article.content == "Updated Content"
    assert updated_article.type_article == "Blog"
    assert updated_article.create_at == datetime(2024, 1, 2).date()

