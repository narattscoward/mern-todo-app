FROM node:18-alpine

WORKDIR /app

# copy backend files
COPY . .

# install dependencies
RUN npm install

EXPOSE 5000

CMD ["npm","start"]