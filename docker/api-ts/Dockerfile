FROM node:16-slim

RUN apt-get -qy update && apt-get -qy install openssl

WORKDIR /app

ENV LANG=C.UTF-8 \
    TZ=Asia/Tokyo