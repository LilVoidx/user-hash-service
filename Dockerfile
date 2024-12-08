FROM node:22.12.0

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .
COPY .env ./

EXPOSE 3000

CMD ["yarn", "dev"]
