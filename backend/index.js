const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const app = express();

// Config port
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log('Server is running on port', PORT));

// JSON
app.use(express.json());

// CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Test API
app.get('/test', (req, res) => {
    try {
        res.status(200).json({ message: 'API is working' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Find all
app.get('/users', async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Find by ID
app.get('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await prisma.user.findUnique({
            where: { id: parseInt(id) }
        });
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create
app.post('/users', async (req, res) => {
    try {
        const { name, email } = req.body;
        const user = await prisma.user.create({
            data: { name, email }
        });
        res.status(201).json(user);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update
app.put('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;
        const user = await prisma.user.update({
            where: { id: parseInt(id) },
            data: { name, email }
        });
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete
app.delete('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.user.delete({
            where: { id: parseInt(id) }
        });
        res.status(204).json();
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});