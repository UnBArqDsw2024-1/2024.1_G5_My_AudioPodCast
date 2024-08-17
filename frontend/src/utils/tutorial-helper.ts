export interface ITutorial {
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

export const tutorials: ITutorial[] = [
    {
        id: 1,
        img: {
            alt: 'tutorial 01',
            src: '/tutorial/tutorial_01.jpeg'
        },
        title: 'Starting Your Own Podcast: A Beginners Guide',
        author: 'Sarah Williams',
        create_at: '03/05/2023',
        description: 'This tutorial walks you through the essentials of starting a podcast, from choosing the right equipment to recording and editing your first episode. Perfect for beginners who want to dive into the world of podcasting.',
    },
    {
        id: 2,
        img: {
            alt: 'tutorial 02',
            src: '/tutorial/tutorial_02.jpeg'
        },
        title: 'Podcast Promotion Strategies: How to Grow Your Audience',
        author: 'Mark Thompson',
        create_at: '15/07/2023',
        description: 'Learn effective strategies to promote your podcast and grow your audience. This tutorial covers social media marketing, networking with other podcasters, and using SEO to increase your visibility on podcast platforms.',
    },
    {
        id: 3,
        img: {
            alt: 'tutorial 03',
            src: '/tutorial/tutorial_03.png'
        },
        title: 'Monetizing Your Podcast: A Step-by-Step Guide',
        author: 'Jessica Lee',
        create_at: '22/09/2023',
        description: 'In this tutorial, you will explore various ways to monetize your podcast, including sponsorships, affiliate marketing, and listener support platforms. Discover the best methods to turn your passion into profit.',
    },
    {
        id: 4,
        img: {
            alt: 'tutorial 04',
            src: '/tutorial/tutorial_04.png'
        },
        title: 'Advanced Podcast Editing Techniques',
        author: 'David Miller',
        create_at: '10/11/2023',
        description: 'Take your podcast editing skills to the next level with this advanced tutorial. Learn how to fine-tune audio quality, incorporate sound effects, and create a polished, professional-sounding podcast that stands out from the competition.',
    },

];
