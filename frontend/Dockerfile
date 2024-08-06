ARG NODE_VERSION=22.5.1

FROM node:${NODE_VERSION}-alpine

WORKDIR /src

COPY . .

RUN npm install

RUN npm run build

EXPOSE 5173

CMD ["npm", "run", "dev",  "--", "--host"]