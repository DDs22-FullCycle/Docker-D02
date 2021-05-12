FROM node:15.14.0 AS node_dev

WORKDIR /usr/src/
COPY /app/package*.json ./

RUN apt-get update && apt-get install wget

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

COPY /app .

RUN chown -R node:node /root/

RUN npm install
RUN npm install prisma
RUN npm install @prisma/client

EXPOSE 3000

ENTRYPOINT [ "dockerize", "-wait", "tcp://mysql-container:3306", "-timeout", "60s" ]
CMD [ "npm", "start" ]
