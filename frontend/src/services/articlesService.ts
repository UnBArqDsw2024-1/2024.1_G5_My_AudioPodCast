export const articleService = {
    getArticles: async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_URL_API}/articles/get`);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            return response.json();
        } catch (error) {
            console.error(error);
            throw new Error(`Cannot get articles`);
        }
    },
    getSingleArticle: async (id: number) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_URL_API}/articles/get/${id}`);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            return response.json();
        } catch (error) {
            console.error(error);
            throw new Error(`Cannot get articles`);
        }
    },
}