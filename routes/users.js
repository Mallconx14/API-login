const express = require('express');
const router = express.Router();
const db = require('../db');

//Post em usuários (create)
router.post('/', (req, res) => {
    const { nome, email, senha } = req.body;
    db.query('INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)', [nome, email, senha], (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao inserir indormações'});
        } else {
            res.json(results);
        }
    });
});

//Get em usuários (read)
router.get('/', (req, res) => {
    db.query('SELECT * FROM usuarios', (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao buscar usuários' });
        } else {
            res.json(results);
        }
    });
}); 

//Put em usuários (update)
router.put('/edit/:id', (req, res) => {
    const { id } = req.params;
    const { nome, email, senha } = req.body;
    db.query('UPDATE usuarios SET nome = ?, email = ?, senha =? WHERE id = ?', [nome, email, senha, id], (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao batualizar informações' });
        } else {
            res.json(results);
        }
    })
})

module.exports = router;