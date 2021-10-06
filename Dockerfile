FROM node:16

WORKDIR /api

COPY package*.json .

RUN npm ci

COPY src .

EXPOSE 4000

CMD node index.js
