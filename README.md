# Alexandra-API

## Descripción

Proyecto de prácticas: un servidor web hecho con Node.js y Express que ofrece una pequeña API con usuarios y productos, y una página HTML que consume esos datos. Está desplegado en Render.

## Tecnologías utilizadas

- Node.js
- Express
- HTML y CSS
- JavaScript (`fetch`)
- Git y GitHub
- Postman (para probar los endpoints)
- Render (para el despliegue)

## Cómo ejecutar el proyecto localmente

1. Clona el repositorio o descarga la carpeta del proyecto.
2. Abre una terminal en la carpeta del proyecto.
3. Instala las dependencias:
```
   npm install
```
4. Arranca el servidor:
```
   node server.js
```
5. Abre en el navegador: http://localhost:3000/

## Lista de endpoints

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/` | Muestra la página HTML |
| GET | `/api/saludo` | Devuelve un mensaje de saludo en JSON |
| GET | `/api/productos` | Devuelve una lista de productos de ejemplo |
| GET | `/usuarios` | Devuelve la lista de usuarios |
| GET | `/usuarios/:id` | Devuelve un usuario por su id (404 si no existe) |
| GET | `/productos` | Devuelve la lista de productos (Pizza, Hamburguesa, Coca-Cola) |

## URL de Render

https://alexandra-api.onrender.com

Nota: al ser un plan gratuito, la primera carga puede tardar hasta un minuto si el servicio estaba inactivo.

## Qué se ha realizado

- Creación de un servidor con Node.js y Express.
- Creación de varios endpoints GET que devuelven JSON.
- Endpoint con parámetro (`/usuarios/:id`) y respuesta 404 cuando el usuario no existe.
- Página HTML con CSS servida desde la carpeta `public`.
- Conexión de la página con la API mediante `fetch()` para mostrar usuarios y productos.
- Pruebas de los endpoints con Postman, en local y en Render.
- Subida del código a GitHub y despliegue en Render.