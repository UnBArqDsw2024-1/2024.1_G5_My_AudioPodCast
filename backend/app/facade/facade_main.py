from facade_user import FacadeUser

class facadeMain:
    def __init__(self):
        self.user = FacadeUser()

    def Article(self):
        self.user.Article()

    def Podcast(self):
        self.user.Podcast()

    def Tutorial(self):
        self.user.Tutorial()
