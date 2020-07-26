FROM node:14
COPY . /app
WORKDIR /app

RUN npm cache clear --force
RUN npm install --registry=https://registry.npm.taobao.org
EXPOSE 7001
CMD  /bin/bash deploy.sh