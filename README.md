# @paulmbw/hackernews-scrapper

  

A simple CLI tool for scrapping posts on hackernews.com

  

## Installing

  

Using npm:

  

```bash

$ npm install -g paulmbw-hackernews-scrapper

```

  

## Usage

  

```bash

$ paulmbw-hackernews-scrapper --posts 50

```

  

You should be getting a similar output to the one shown below:

  

```bash

[ { by: 'yoaviram',

descendants: 1,

id: 18147031,

kids: [ 18147033 ],

score: 12,

time: 1538735685,

title: 'Show HN: Get organisations to erase your personal data (automated GDPR requests)',

type: 'story',

url: 'https://opt-out.eu/' },

{ by: 'zubairq',

descendants: 4,

id: 18132526,

kids: [ 18132544 ],

score: 2,

time: 1538587602,

title: 'Show HN: Build web based SQLite apps and compile to a single HTML file',

type: 'story',

url: 'http://appshare.co' }

...

...]

```

## Packages used and motivation
 - `axios` is a promise based HTTP client for the browser and node.js. Axios was used to make GET requests to the hackernews API
 - `commander` is a light-weight, expressive, and powerful command-line framework for [node.js](http://nodejs.org/). Arguments `--posts` and `n` were necessary for this CLI app. Commander makes it easy to read arugemenst passed in the terminal and parse them for later use.
 - `validator` is a data validation library in JavaScript for the browser and Node.js. The requirements of this task outlined the posts returned from hacker news must contain a valid URL. This package can be used to validate URLs.
 - `chalk` is a library for terminal string styling (mainly used for logging success/error messages in the terminal)
 - `axios-mock-adapter` is a library for mocking requests. For testing, it was necessary to mock the API and simulate a response similar to the real hackernews API.
 - `chai` is an assertion library when performing TDD/BDD. This was used to assert expected and actual responses in the unit tests.
 - `jest` is a javascript testing framework. Jest was used to setup the unit tests found in this project, and tests can be executed with the `npm run test` command.