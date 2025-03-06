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
2. **Build the Docker containers**  
   ```sh
   docker compose build
3. **Start the backend container**  
   ```sh
   docker compose up -d backend
4. **Run database migrations**
   ```sh
   docker exec -it backend npx prisma migrate dev --name init

## 🔧 Backend Setup (Development Mode)

1. **Create a .env file and add the following database configuration:**
   ```sh
   DATABASE_URL="postgresql://postgres:postgres@localhost:5435/postgres?schema=public"
2. **Stop the backend container before running in development mode:**
   ```sh
   docker stop backend
3. **Install dependencies:**
   ```sh
   npm install
4. **Generate Prisma Client**
   ```sh
   npx prisma generate
5. **Start the backend service:**
   ```sh
   node index.js

## 🎨 Frontend Setup
1. **Install dependencies:**
   ```sh
   npm install
2. **Start the frontend development server:**
   ```sh
   npm run dev

## 📜 Notes
- For development, ensure the backend container is stopped before running locally.
- For production, use docker compose up -d to run services in detached mode.

