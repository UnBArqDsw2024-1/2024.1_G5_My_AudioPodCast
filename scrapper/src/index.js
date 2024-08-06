import fetch from 'node-fetch';
import cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class Article {
  constructor(url) {
    this.url = url;
  }

  async fetchDetails() {
    try {
      const response = await fetch(this.url);
      const html = await response.text();
      const $ = cheerio.load(html);

      this.title = $('h1.blog-page-title').text();
      this.content = $('.secondline-themes-blog-single-excerpt > p').text();
      this.type = $('span.single-blog-meta-category-list').text();
      this.create_at = $('span.blog-meta-date-display').text();
    } catch (error) {
      console.error(`Error fetching article details for ${this.url}:`, error);
    }
  }

  async fetchTitles() {
    try {
      const response = await fetch(process.env.BASE_URL);
      const html = await response.text();
      const $ = cheerio.load(html);

      const articles = [];

      $('a.more-link').each((index, element) => {
        const articleUrl = $(element).attr('href');
        articles.push(new Article(articleUrl));
      });

      return articles;
    } catch (error) {
      console.error('Error fetching article titles:', error);
    }
  }
}

class ArticleFactory {
  static async createArticles() {
    const articleInstance = new Article();
    return await articleInstance.fetchTitles();
  }
}

async function main() {
  const articles = await ArticleFactory.createArticles();
  const articlesData = [];

  for (const article of articles) {
    await article.fetchDetails();
    articlesData.push({
      title: article.title,
      content: article.content,
      type: article.type,
      create_at: article.create_at
    });
  }

  const filePath = path.join(__dirname, 'articles.json');

  fs.writeFileSync(filePath, JSON.stringify(articlesData, null, 2), 'utf-8');

  console.log(`All articles saved in ${filePath}`);
}

main();
