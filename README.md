# @paulmbw/hackernews-scrapper

A simple CLI tool for scrapping posts on hackernews.com

## Installing

Using npm:

```bash
$ npm i @paulmbw/hackernews-scrapper
```

## Usage

```bash
$ hackernews-scrapper --posts 50
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

