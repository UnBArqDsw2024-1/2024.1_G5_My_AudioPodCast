from app.models.article import Article
from app.models.podcast import Podcast
from app.models.tutorial import Tutorial

class FacadeUser:
    
    def __init__(self):
        self.article = Article()
        self.podcast = Podcast()
        self.tutorial = Tutorial()

    def Article(self):
        self.article.create()
        self.article.read()

    def Podcast(self):
        self.podcast.access()
        self.podcast.listen()
        self.podcast.create()

    def Tutorial(self):
        self.tutorial.listen()
