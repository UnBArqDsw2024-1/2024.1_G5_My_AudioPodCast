export const podcastService = {
    getPodcasts: async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_URL_API}/podcasts/get`);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            return response.json();
        } catch (error) {
            console.error(error);
            throw new Error(`Cannot get poscasts`);
        }
    },
    getSinglePodcast: async (id: number) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_URL_API}/podcasts/get/${id}`);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            return response.json();
        } catch (error) {
            console.error(error);
            throw new Error(`Cannot get poscast`);
        }
    },
}