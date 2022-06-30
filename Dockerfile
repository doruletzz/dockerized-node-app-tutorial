FROM node:16

WORKDIR /src/

COPY package*.json ./
COPY . .

RUN npm install
EXPOSE 4000

CMD [ "sh", "wait.sh" ]