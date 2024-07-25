from facade_main import facadeMain

def main():
    facade_main = facadeMain()

    print("Iniciando artigo:")
    facade_main.article()

    print("\nIniciando podcast:")
    facade_main.podcast()

    print("\nIniciando tutorial:")
    facade_main.tutorial()

if __name__ == "__main__":
    main()