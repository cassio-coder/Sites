const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');

app.get('/Grupos', (req, res) => {
    res.json({
        nome: "eu",
        desc: "hfkvtgcmfhxcgftxmdcm",
    })
})
const caminho = path.join(__dirname, 'index.html');
fs.readFile(caminho, 'utf-8', (err, data) => {
    if (err) {
        res.status(500).send('Erro ao ler o arquivo');
        return;
    }
    app.get('/', (req, res) => {
        res.send(data);
    });
})
const port = process.env.PORT || 3000;
app.listen(port,()=> console.log(`Server running on port ${port}`));