FROM node:14-alpine

WORKDIR /opt/app 

ADD package.json package.json

RUN npm install

ADD . .

RUN npm run build

# почистить не нужные npm пакеты
RUN npm prune --production

CMD ["node", "./dist/main.js"]