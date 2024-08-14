from fastapi import FastAPI
from .api.controller import user, article
from .database import init_db

app = FastAPI(lifespan=init_db())

app.include_router(user.router)
app.include_router(article.router)

@app.get("/")
def read_root():
    return {"Hello": "World"}
