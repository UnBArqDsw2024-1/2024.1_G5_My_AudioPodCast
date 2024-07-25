from ..database import Base

class Tutorial(Base):
    def read(self):
        print("Lendo um tutorial...")
