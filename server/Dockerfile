FROM node:14-alpine

WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . .

COPY .env .env

EXPOSE 3333

RUN npm run build

CMD ["npm","start"]