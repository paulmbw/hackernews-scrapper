# Define image
FROM node:8

# Install the  @paulmbw/hackernews-scrapper package from npm
RUN npm install -g @paulmbw/hackernews-scrapper

# Run hackernews-scrapper with --posts n to retriece posts from hackernews.com
CMD hackernews-scrapper --posts 100