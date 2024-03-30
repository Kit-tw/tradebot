FROM node:21

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 9110

CMD ["serve", "-s", "dist", "-p", "9110"]
