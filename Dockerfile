FROM node:20.13.1-alpine

ENV PORT=3000
ENV NODE_ENV=$NODE_ENV
ENV FRONT_DIR=/app/frontend
ENV BACK_DIR=/app/backend
ENV STATIC_DIR=$FRONT_DIR/dist
ENV VITE_API_URL=${VITE_API_URL}

RUN mkdir /app
ADD ./part2/phonebook $FRONT_DIR
ADD ./part3/backend $BACK_DIR

RUN export VITE_API_URL=$VITE_API_URL

WORKDIR $FRONT_DIR

RUN echo "VITE_API_URL=${API_URL}" > .env
RUN yarn
RUN yarn build

WORKDIR /app/backend

RUN yarn

EXPOSE $PORT

CMD ["node", "src/index.js"]
