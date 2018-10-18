FROM node:8

WORKDIR /usr/src/app

COPY / /usr/src/app/

EXPOSE 8081
CMD [ "npm", "start" ]
