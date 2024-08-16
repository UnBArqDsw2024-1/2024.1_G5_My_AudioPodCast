export interface IArticle {
    id: number;
    img: {
        alt: string;
        src: string;
    };
    title: string;
    author: string;
    create_at: string;
    description: string;
}

export const articles: IArticle[] = [
    {
        id: 1,
        img: {
            alt: 'article 01',
            src: '/article/article_01.jpg'
        },
        title: 'The Rise of AI in Daily Life',
        author: 'Sophia Turner',
        create_at: '05/12/2023',
        description: 'This article explores how artificial intelligence is becoming an integral part of our everyday lives.',
    },
    {
        id: 2,
        img: {
            alt: 'article 02',
            src: '/article/article_02.jpg'
        },
        title: 'Exploring the Deep Ocean',
        author: 'James Cameron',
        create_at: '14/07/2022',
        description: 'An in-depth look at the latest discoveries from the uncharted territories of the deep ocean.',
    },
    {
        id: 3,
        img: {
            alt: 'article 03',
            src: '/article/article_03.jpg'
        },
        title: 'Sustainable Living: A Guide',
        author: 'Emily Clarke',
        create_at: '22/11/2021',
        description: 'A comprehensive guide to adopting a more sustainable and eco-friendly lifestyle.',
    },
    {
        id: 4,
        img: {
            alt: 'article 04',
            src: '/article/article_04.jpg'
        },
        title: 'The Future of Space Travel',
        author: 'Michael Johnson',
        create_at: '30/04/2023',
        description: 'An article discussing the advancements in space travel and what the future might hold for humanity beyond Earth.',
    },
    {
        id: 5,
        img: {
            alt: 'article 05',
            src: '/article/article_05.jpg'
        },
        title: 'The Impact of Social Media',
        author: 'Olivia Green',
        create_at: '17/08/2022',
        description: 'An analysis of how social media is shaping our society and influencing personal relationships.',
    },
    {
        id: 6,
        img: {
            alt: 'article 06',
            src: '/article/article_06.jpg'
        },
        title: 'Understanding Quantum Computing',
        author: 'David Lee',
        create_at: '09/01/2024',
        description: 'An introductory article explaining the basics of quantum computing and its potential applications.',
    },
];
