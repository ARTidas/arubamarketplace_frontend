#FROM node:16-alpine AS build
FROM node:16.14 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 4202
CMD ["npm", "start"]