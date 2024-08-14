from pydantic import BaseModel

class PodcastBase(BaseModel):
    name: str
    description: str
    rating: float

class PodcastCreate(PodcastBase):
    pass

class PodcastInDB(PodcastBase):
    id: int

    class Config:
        orm_mode = True
