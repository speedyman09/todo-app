FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npx prisma generate

RUN npm run build

ENV NODE_ENV production

COPY start.sh /usr/src/app/

RUN chmod +x /usr/src/app/start.sh

CMD ["/usr/src/app/start.sh"]