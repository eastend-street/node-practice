FROM node:10.15.2-alpine
WORKDIR /usr/app
COPY ./package.json /usr/app
RUN npm install --quiet
COPY ./actors.json /usr/app
COPY ./logger.json /usr/app
COPY ./src/. /usr/app/src
COPY ./public/. /usr/app/public
copy ./index.js /usr/app
