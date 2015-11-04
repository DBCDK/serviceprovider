################################################################################
# Dockerfile for pallesgavebod.
# Contains instructions to build for production.
# This is overwritten in the compose file to build for development and staging.
# Requires a preexisting image which looks something like this:
## FROM node
## ONBUILD ENV NPM_TOKEN 00000000-0000-0000-0000-000000000000
# Then use something like: docker build -t pgenv -f YOURFILE .
# This is required due because we want to keep passwords a secret,
# and docker does not currently support injecting them.
# This will change with docker 1.9.
################################################################################

FROM pgenv
MAINTAINER JPH <jph@dbc.dk>

# Make relevant directories and set working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy package.json and .npmrc into working dir
COPY package.json /usr/src/app/
COPY .npmrc /usr/src/app/

# Install required packages
RUN npm install
RUN npm install -g supervisor
RUN npm install -g parallelshell

# Configure environment (Override this if necessary)
ENV REDISHOST localhost
ENV CACHEHOST localhost
# ENV NODE_ENV production

# Copy the rest into working directory
COPY . /usr/src/app

# Run the app and expose the relevant port
EXPOSE 8080
ENTRYPOINT ["npm", "run"]
CMD ["dev:remoteprofile"]
