FROM node:16

WORKDIR /cache-api

COPY package*.json .

RUN npm ci

COPY src .

EXPOSE 4000

CMD node index.js
