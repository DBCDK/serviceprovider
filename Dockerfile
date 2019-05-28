ARG NODE_BASEIMAGE=docker.dbc.dk/node10:latest
# ---- Base Node ----
FROM  $NODE_BASEIMAGE AS build
# set working directory
WORKDIR /home/node/app
# copy project file
COPY . .
COPY .babelrc .

ENV CI=true

# install node packages
RUN npm set progress=false && npm config set depth 0 && \
  npm install --only=production && \
  mkdir prod_build && \
  cp -R --preserve=links node_modules prod_build/node_modules && \
  npm install

# make produktion build
RUN cp -R src prod_build/src && \
  cp -R package.json prod_build/package.json && \
  cp -R doc prod_build/doc && \
  cp -R .babelrc prod_build/.babelrc && \
  cp -R context-sample.json prod_build/context.json


# run test @see package.json
RUN ln -fs /usr/share/zoneinfo/Europe/Berlin /etc/localtime
RUN dpkg-reconfigure -f noninteractive tzdata
ENV HTTP_ONLY=true
RUN npm run test

#
# ---- Release ----
FROM $NODE_BASEIMAGE AS release
WORKDIR /home/node/app
COPY --chown=node:node --from=build /home/node/app/prod_build ./
EXPOSE 3000
USER node
CMD node src/main.js
