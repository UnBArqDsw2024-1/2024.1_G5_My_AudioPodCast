from pydantic import BaseModel

class ArticleCreate(BaseModel):
    title: str
    content: str
    type_article: str
    create_at: str