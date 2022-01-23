FROM node:erbium-alpine3.15
WORKDIR /usr/app
COPY ./"package*.json" ./
RUN npm install
RUN npm install --global --unsafe-perm typeorm
COPY  . . 
EXPOSE ${PORT}
CMD ["npm", "run", "start"]