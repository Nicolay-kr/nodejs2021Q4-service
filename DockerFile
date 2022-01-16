FROM node:erbium-alpine3.15
WORKDIR /usr/app
COPY ./"package*.json" ./
RUN npm install
COPY  . . 
EXPOSE ${PORT}
CMD ["npm", "run", "start"]