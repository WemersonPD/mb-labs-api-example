FROM node:alpine

WORKDIR /usr/app

COPY package.json /usr/app

RUN yarn install

COPY . /usr/app

EXPOSE 3000

CMD ["yarn", "start"]
