#!/usr/bin/env node
const program = require('commander');
const { getArticle, getArticalIds } = require('./utils.js');
const chalk = require('chalk');

// Read arguments passed from command line and validate them
program.version('0.1.0')
  .option('-p, --posts <n>', 'Number of posts you are requesting', parseInt)
  .action(() => {
    if (isNaN(program.posts)) {
      console.error('Please enter a valid number');
      process.exit(1);
    } else if (program.posts > 100) {
      console.error('Please enter a number less than or equal to 100');
      process.exit(1);
    }
  }).parse(process.argv);

/**
 * async function to call getArticalIds() and getArticle(articleId) functions that return a Promise
 */
async function getHackerNews() {
  let articles = [];
  let articleIds;

  try {
    articleIds = await getArticalIds();
    articleIds.slice(0, program.posts).forEach(async articleId => {
      articles.push(await getArticle(articleId));
      console.log(articles);
    });
  } catch (error) {
    console.log(chalk.red(JSON.stringify(error)));
  }
}

getHackerNews();