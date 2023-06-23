FROM node:alpine

COPY package.json ./

COPY server.js ./

RUN npm install

EXPOSE 3000

#The command below is how you run server.js
CMD ["node", "server.js"]