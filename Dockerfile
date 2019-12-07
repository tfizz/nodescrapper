FROM node:13.2.0-alpine3.10
WORKDIR /home/app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm","run","start"]