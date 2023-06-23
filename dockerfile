FROM node:alpine

WORKDIR /usr/app

COPY package.json /usr/app

COPY server.js /usr/app

RUN npm install

EXPOSE 3000

#The command below is how you run server.js
CMD ["node", "server.js"]