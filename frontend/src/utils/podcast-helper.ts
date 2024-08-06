export interface IPodcast {
    img: {
        alt: string;
        src: string;
    };
    title: string;
    author: string;
    description: string;
}

export const podcasts: IPodcast[] = [
    {
        img: {
            alt: 'podcast 01',
            src: '/podcast/podcast_01.jpg'
        },
        title: 'The Future of Tech',
        author: 'Jane Doe',
        description: 'In this podcast, we explore the latest trends in technology and what the future holds.',
    },
    {
        img: {
            alt: 'podcast 02',
            src: '/podcast/podcast_02.jpg'
        },
        title: 'Mindful Living',
        author: 'John Smith',
        description: 'Join us as we discuss techniques for living a more mindful and balanced life.',
    },
    {
        img: {
            alt: 'podcast 03',
            src: '/podcast/podcast_03.jpg'
        },
        title: 'History Uncovered',
        author: 'Alice Johnson',
        description: 'Delve into the lesser-known stories from history that shaped the world we live in today.',
    },
    {
        img: {
            alt: 'podcast 04',
            src: '/podcast/podcast_04.jpg'
        },
        title: 'Creative Minds',
        author: 'Michael Brown',
        description: 'A podcast about the creative process, featuring interviews with artists and writers.',
    },
    {
        img: {
            alt: 'podcast 05',
            src: '/podcast/podcast_05.jpg'
        },
        title: 'Healthy Habits',
        author: 'Emily Davis',
        description: 'Tips and advice on developing healthy habits that can improve your daily life.',
    },
    {
        img: {
            alt: 'podcast 06',
            src: '/podcast/podcast_06.jpg'
        },
        title: 'Science Explained',
        author: 'Robert Wilson',
        description: 'Breaking down complex scientific concepts into easy-to-understand explanations.',
    },
];
