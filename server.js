const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('HOLA SOY ALEXANDRA');
});

app.get('/api/saludo', (req, res) => {
  res.json({ mensaje: 'Hola desde mi API', autora: 'Alexandra' });
});

app.get('/api/productos', (req, res) => {
  res.json([
    { id: 1, nombre: 'Portátil', precio: 800 },
    { id: 2, nombre: 'Ratón', precio: 20 },
    { id: 3, nombre: 'Teclado', precio: 45 }
]);
});

app.get('/usuarios', (req, res) => {
  res.json([
    { id: 1, nombre: 'Juan' },
    { id: 2, nombre: 'Maria' },
    { id: 3, nombre: 'Pedro' }
  ]);

});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
