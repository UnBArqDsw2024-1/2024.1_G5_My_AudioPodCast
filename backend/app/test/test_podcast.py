import pytest
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.database import Base, get_db
from app.models.podcast import Podcast
from app.api.schemas.podcast import PodcastCreate
from fastapi.testclient import TestClient
from app.main import app

# Configuração do banco de dados para os testes
SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base.metadata.create_all(bind=engine)

# Fixture para fornecer uma sessão de banco de dados para os testes
@pytest.fixture(scope="function")
def db():
    session = TestingSessionLocal()
    try:
        yield session
    finally:
        session.close()
        # Limpeza do banco de dados após o teste
        session.query(Podcast).delete()
        session.commit()

# Substitui a dependência do banco de dados no app
def override_get_db():
    try:
        db = TestingSessionLocal()
        yield db
    finally:
        db.close()

app.dependency_overrides[get_db] = override_get_db

# Testes para a entidade Podcast
def test_create_podcast(db):
    podcast_data = PodcastCreate(
        name="Test Podcast",
        description="Test Description",
        rating=5.0
    )
    db.add(Podcast(**podcast_data.dict()))
    db.commit()

    # Verifique se o podcast foi criado
    created_podcast = db.query(Podcast).filter_by(name="Test Podcast").first()
    assert created_podcast is not None
    assert created_podcast.name == "Test Podcast"
    assert created_podcast.description == "Test Description"
    assert created_podcast.rating == 5.0

def test_read_all_podcasts(db):
    # Insira um podcast de teste
    test_podcast = Podcast(name="Test Podcast", description="Test Description", rating=5.0)
    db.add(test_podcast)
    db.commit()

    # Verifique se o podcast foi inserido
    podcasts = db.query(Podcast).all()
    assert isinstance(podcasts, list)
    assert len(podcasts) > 0

def test_read_podcast(db):
    # Insira um podcast de teste
    test_podcast = Podcast(name="Test Podcast", description="Test Description", rating=5.0)
    db.add(test_podcast)
    db.commit()

    # Verifique se o podcast pode ser lido
    podcast = db.query(Podcast).filter_by(name="Test Podcast").first()
    assert podcast is not None
    assert podcast.name == "Test Podcast"

def test_update_podcast(db):
    # Insira um podcast de teste
    test_podcast = Podcast(name="Test Podcast", description="Test Description", rating=5.0)
    db.add(test_podcast)
    db.commit()

    # Atualize o podcast
    podcast = db.query(Podcast).filter_by(name="Test Podcast").first()
    podcast.name = "Updated Podcast"
    db.commit()

    # Verifique se o podcast foi atualizado
    updated_podcast = db.query(Podcast).filter_by(name="Updated Podcast").first()
    assert updated_podcast is not None
    assert updated_podcast.name == "Updated Podcast"

def test_delete_podcast(db):
    # Insira um podcast de teste
    test_podcast = Podcast(name="Test Podcast", description="Test Description", rating=5.0)
    db.add(test_podcast)
    db.commit()

    # Delete o podcast
    podcast = db.query(Podcast).filter_by(name="Test Podcast").first()
    db.delete(podcast)
    db.commit()  # Certifique-se de fazer o commit

    # Verifique se o podcast foi deletado
    deleted_podcast = db.query(Podcast).filter_by(name="Test Podcast").first()
    assert deleted_podcast is None
