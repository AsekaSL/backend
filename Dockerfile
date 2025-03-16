FROM node:22.14.0
WORKDIR /app
COPY package*
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "server.js"]