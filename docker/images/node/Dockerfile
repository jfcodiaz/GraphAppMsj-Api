FROM node:lts-alpine AS base

WORKDIR /app
# build
FROM base AS build

COPY ./code /app
ENV NODE_ENV=production

RUN yarn install

# distribution
FROM mongo:latest AS dist

WORKDIR /app

ENV MONGO_URI=mongodb://localhost:27017/chat_db?authSource=admin

RUN apt-get update && apt-get install -y supervisor && apt-get clean
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - && \
    apt-get update && apt-get install -y nodejs && \
    apt-get clean 

COPY --from=build /app /app
COPY docker/config/production-dist/supervisord/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

CMD ["/usr/bin/supervisord"]

# development
FROM base AS dev

RUN apk add --no-cache git bash openssh

CMD [ "tail -f /dev/null" ]
