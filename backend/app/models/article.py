from ..database import Base

class Article(Base):
    def create(self):
        print("Criando um artigo...")

    def read(self):
        print("Lendo um artigo...")
