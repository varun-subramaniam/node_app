FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 8080
ENTRYPOINT ["npm", "run", "start"]