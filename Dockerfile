FROM node:10.15.2-alpine
WORKDIR /usr/app
COPY ./package.json /usr/app
RUN npm install --quiet
COPY . /usr/app
