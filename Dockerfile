FROM node:lts AS builder
WORKDIR /app
COPY package*.json /app/
RUN npm ci
COPY . /app/
RUN npm run build

FROM nginx
EXPOSE 80
HEALTHCHECK CMD curl -sf http://localhost/

RUN apt update && apt install -y curl && apt clean && rm -rf /var/lib/apt/*

COPY --from=builder /app/dist/ /usr/share/nginx/html
COPY contrib/nginx-default.conf /etc/nginx/conf.d/default.conf

