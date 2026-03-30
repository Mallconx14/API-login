const express = require('express');
const userRoutes = express.Router();
const db = require('../db');

//Get em usuários
userRoutes.get('/', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao buscar usuários' });
        } else {
            res.json(results);
        }
    });
});