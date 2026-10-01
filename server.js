const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;

const usuarios = [
  { id: 1, nombre: 'Juan' },
  { id: 2, nombre: 'Maria' },
  { id: 3, nombre: 'Pedro' }
];

const productos = [
  { id: 1, nombre: 'Pizza', precio: 30000 },
  { id: 2, nombre: 'Hamburguesa', precio: 25000 },
  { id: 3, nombre: 'Coca-Cola', precio: 10000 }
];

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
  res.json(usuarios);
});

app.get('/usuarios/:id', (req, res) => {
  const id = Number(req.params.id);
  const usuario = usuarios.find((u) => u.id === id);

  if (!usuario) {
    return res.status(404).json({ mensaje: 'Usuario no encontrado' });
  }

  res.json(usuario);
});

app.get('/productos', (req, res) => {
  res.json(productos);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
