# PERN fullstack web-application for basic user management

- Run database dockerize by CMD : docker compose up -d db
- Run docker compose build : for build docker
- Run docker exec -it backend npx prisma migrate dev --name init : to migrate database

Backend CMD
add .env file with DATABASE_URL config
DATABASE_URL="postgresql://postgres:postgres@localhost:5435/postgres?schema=public"

1. npm install : to install node modules
2. npx prisma generate
3. node index.js : to run backend service

Frontend CMD
1. npm install : to install node modules
2. npm run dev : to run frontend

