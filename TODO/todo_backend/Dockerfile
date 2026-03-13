FROM node:18-alpine

WORKDIR /app

# copy backend
COPY TODO/todo_backend ./backend

# copy frontend
COPY TODO/todo_frontend ./frontend

# install backend deps
WORKDIR /app/backend
RUN npm install

# build frontend
WORKDIR /app/frontend
RUN npm install
RUN npm run build

# move build to backend static folder
RUN mkdir -p /app/backend/static
RUN cp -r build /app/backend/static/

WORKDIR /app/backend

EXPOSE 5000

CMD ["npm","start"]