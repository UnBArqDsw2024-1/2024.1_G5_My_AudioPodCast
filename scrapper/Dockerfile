ARG NODE_VERSION=18

FROM node:${NODE_VERSION}-alpine

ENV NODE_ENV development

WORKDIR /src/app

COPY package*.json ./

RUN npm install

COPY . .

USER node

EXPOSE 3000

CMD ["node", "src/index.js"]
