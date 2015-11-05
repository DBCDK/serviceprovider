################################################################################
# Dockerfile for pallesgavebod.
# Contains instructions to build for production.
# This is overwritten in the compose file to build for development and staging.
# OSX build and run instructions (For docker 1.9.0):
# docker pull redis
# docker build -t pg --build-arg NPM_KEY=${NPM_TOKEN} .
# docker run -d --name redis redis
# docker run -p 8080:8080 --rm -v ~/IdeaProjects/pallesgavebod/src:/usr/src/app/src -e REDISHOST=redis -e CACHEHOST=redis --link redis:redis pg
################################################################################

FROM node
MAINTAINER JPH <jph@dbc.dk>

# Make relevant directories and set working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Set NPM_TOKEN as an environment variable
ARG NPM_KEY
ENV NPM_TOKEN $NPM_KEY

# Copy package.json and .npmrc into working dir
COPY package.json /usr/src/app/
RUN echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > .npmrc

# Install required packages
RUN npm install
RUN npm install -g supervisor
RUN npm install -g parallelshell

# Configure environment (Override this if necessary)
ENV REDISHOST localhost
ENV CACHEHOST localhost

# Copy the rest into working directory
COPY . /usr/src/app

# Run the app and expose the relevant port
EXPOSE 8080
ENTRYPOINT ["npm", "run"]
CMD ["dev:remoteprofile"]
