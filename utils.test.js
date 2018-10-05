const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const { expect } = require('chai');
const { getArticle, getArticalIds } = require('./utils.js');

describe('utils', () => {
  let mockAxios;

  beforeAll(() => {
    mockAxios = new MockAdapter(axios);
  });

  afterEach(() => {
    mockAxios.reset();
  })

  it('should call getArticalIds and return an arary of ids', async () => {
    const expectedResult = {
      data: [10000, 100001, 100002]
    }

    mockAxios.onGet('https://hacker-news.firebaseio.com/v0/showstories.json').reply(200, {
      data: [10000, 100001, 100002]
    });
    const result = await getArticalIds();
    expect(result).to.deep.equal(expectedResult);
  });

  it('should called getArticle and return a json object denoting an article', async () => {
    const articleId = '18129892'
    const expectedArticle = {
      by: 'test',
      descendants: 38,
      id: articleId,
      kids: [18135037],
      score: 89,
      time: 1538572884,
      title: 'A test article',
      type: 'story',
      url: 'https://hacker-news-test.com/'
    }

    mockAxios.onGet(`https://hacker-news.firebaseio.com/v0/item/${articleId}.json?print=pretty`).reply(200, {
      ...expectedArticle
    });

    const article = await getArticle(articleId);
    expect(article).to.deep.equal(expectedArticle);
  });

  it('Error should be thrown if getArticalIds call fails', async () => {
    const response = {
      error: 'get request to https://hacker-news.firebaseio.com/v0/showstories.json responded with 401: undefined'
    }

    mockAxios.onGet('https://hacker-news.firebaseio.com/v0/showstories.json').reply(401, {});

    try {
      await getArticalIds();
    } catch (error) {
      expect(error).to.deep.equal(response);
    }
  });
})