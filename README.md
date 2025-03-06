# PERN fullstack web-application for basic user management

- Run database dockerize by CMD : docker compose up -d db
- Run docker compose build : for build docker
- Run docker compose up -d backend : to run dockerized backend
- Run docker exec -it backend npx prisma migrate dev --name init : to migrate database

Backend CMD
add .env file with DATABASE_URL config
DATABASE_URL="postgresql://postgres:postgres@localhost:5435/postgres?schema=public"

* If you want to run backend while developing(can edit an re-run), stop backend container before.
1. npm install : to install node modules
2. npx prisma generate
3. node index.js : to run backend service

Frontend CMD
1. npm install : to install node modules
2. npm run dev : to run frontend

----------------------------------------------------------------------------------------------------------------------------

# 🚀 PERN Fullstack Web Application for Basic User Management

This project is a **PERN** (PostgreSQL, Express.js, React, Node.js) fullstack web application for basic user management.

---

## 🛠️ Setup and Installation

### 📌 Prerequisites
- **Docker** installed on your system
- **Node.js** (for local development)

---

## 🗄️ Database Setup (Dockerized PostgreSQL)

1. **Start the database container**  
   ```sh
   docker compose up -d db



