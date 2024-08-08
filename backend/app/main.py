from fastapi import FastAPI
from .database import init_db

app = FastAPI(lifespan=init_db())

@app.get("/")
def read_root():
    return {"Hello": "World"}
