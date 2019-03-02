FROM node:7.7.2-alpine
WORKDIR /usr/app
COPY ./package.json /usr/app
RUN npm install --quiet
COPY . /usr/app
