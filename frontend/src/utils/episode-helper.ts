export interface IEpisode {
  img: {
    alt: string;
    src: string;
  };
  title: string;
  author: string;
  create_at: string;
  description: string;
}

export const episodes: IEpisode[] = [
  {
    img: {
      alt: "article 01",
      src: "/article/article_01.jpg",
    },
    title: "IA e o nosso cotidiano",
    author: "Casos e Causos",
    create_at: "05/12/2023",
    description:
      "Ete artigo explora como a inteligencia artifical tem mudado o cotidiano das pessoas",
  },
  {
    img: {
      alt: "article 02",
      src: "/article/article_02.jpg",
    },
    title: "Adoção Pet e saúde mental",
    author: "Casos e Causos",
    create_at: "14/07/2022",
    description:
      "Este é um relato de como a adoção de Pets pode ajudar em tratamentos de transtornos mentais.",
  },
  {
    img: {
      alt: "article 03",
      src: "/article/article_03.jpg",
    },
    title: "Moda e Sustentabilidade",
    author: "Casos e Causos",
    create_at: "22/11/2021",
    description: "A moda vem sendo uma das industrias mais poluentes do mundo, mas não precisa ser assim.",
  },
  {
    img: {
      alt: "article 04",
      src: "/article/article_04.jpg",
    },
    title: "Agricultura familiar",
    author: "Casos e Causos",
    create_at: "30/04/2023",
    description: "O impacto da agricultura familiar na mesa dos Brasileiros",
  },
  {
    img: {
      alt: "article 05",
      src: "/article/article_05.jpg",
    },
    title: "Reciclagem em Casa",
    author: "Casos e Causos",
    create_at: "17/08/2022",
    description: "Reciclar em casa pode gerar economia e ajuda o meio ambiente",
  },
  {
    img: {
      alt: "article 06",
      src: "/article/article_06.jpg"
   },
    title: "Mulheres na ciencia",
    author: "Casos e Causos",
    create_at: "09/01/2024",
    description: "Uma historia sobre as maiores cientistas que o mundo já teve.",
  },
];
