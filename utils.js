const axios = require('axios');
const validator = require('validator');
const chalk = require('chalk');

const HACKER_NEWS_API_GET_ARTICLES = 'https://hacker-news.firebaseio.com/v0/showstories.json';

/*
  Hackernews api initally returns an array of article ids which we can 
  subsequently make a second GET request for each article id to return it's content. 
  Method getArticalIds will return an array of article ids.
*/
const getArticalIds = () => {
  return new Promise((resolve, reject) => {
    console.log(chalk.bold.cyan(`Making GET request to ${HACKER_NEWS_API_GET_ARTICLES}`));
    axios.get(HACKER_NEWS_API_GET_ARTICLES)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        if (error.response) {
          reject({ error: `${error.response.config.method} request to ${error.response.config.url} responded with ${error.response.status}: ${error.response.data.error}` });
        }
      });
  });
}

/*
  Return a JSON object for a given article
*/
const getArticle = (articleId) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://hacker-news.firebaseio.com/v0/item/${articleId}.json?print=pretty`)
      .then(response => {
        const url = response.data.url && validator.isURL(response.data.url);
        const titleAndAuthor = response.data.title && response.data.by
        const titleAndAuthorLength = response.data.title.length < 256 && response.data.by.length < 256
        const score = response.data.score && response.data.score >= 0
        const comments = response.data.kids && response.data.kids.length >= 0

        if (url && titleAndAuthor && titleAndAuthorLength && score && comments) {
          resolve(response.data);
        }
      })
      .catch(error => {
        if (error.response) {
          reject({ error: `${error.response.config.method} request to ${error.response.config.url} responded with ${error.response.status}: ${error.response.data.error}` });
        }
      });
  });
}

module.exports = {
  getArticle,
  getArticalIds
}