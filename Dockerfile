FROM node:20.13.1-alpine

ENV PORT=3000
ENV NODE_ENV=$NODE_ENV
ENV FRONT_DIR=/app/frontend
ENV BACK_DIR=/app/backend
ENV STATIC_DIR=$FRONT_DIR/dist
ENV VITE_API_URL=${VITE_API_URL}
ENV MONGO_URI=${MONGO_URI}
ENV MONGO_USER=${MONGO_USER}
ENV MONGO_PASSWORD=${MONGO_PASSWORD}

RUN mkdir /app
ADD ./part2/phonebook $FRONT_DIR
ADD ./part3/backend $BACK_DIR

WORKDIR $FRONT_DIR

RUN yarn install
RUN yarn build

WORKDIR /app/backend

RUN yarn install
RUN yarn lint

EXPOSE $PORT

CMD ["node", "src/index.js"]
