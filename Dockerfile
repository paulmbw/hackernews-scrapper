# Define image
FROM node:8

# Install the paulmbw-hackernews-scrapper package from npm
RUN npm install -g paulmbw-hackernews-scrapper

# Run paulmbw-hackernews-scrapper with --posts n to retrieve posts from hackernews.com
CMD paulmbw-hackernews-scrapper --posts 100