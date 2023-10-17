FROM node:16-alpine

WORKDIR /opt/app 

ADD package.json package.json

RUN npm install --legacy-peer-deps

ADD . .

RUN npm run build

# почистить не нужные npm пакеты
# RUN npm prune --legacy-peer-deps --omit=dev

CMD ["node", "./dist/main.js"]