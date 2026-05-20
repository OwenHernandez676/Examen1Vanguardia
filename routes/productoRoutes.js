const express = require('express'); //Importamos express para crear el router y definir las rutas de productos.

const router = express.Router(); //Crea un router para definir las rutas de productos.

const { //Importamos las funciones del controlador para usarlas en las rutas.
    crearProducto,
    obtenerProductos,
    obtenerProducto,
    actualizarProducto   
} = require('../controllers/productoController');

router.post('/api/productos', crearProducto); //Define la ruta POST para crear un producto.
router.get('/api/productos', obtenerProductos); //Define la ruta GET para obtener todos los productos.
router.get('/api/productos/:id', obtenerProducto); //Define la ruta GET para obtener un producto por ID.
router.put('/api/productos/:id', actualizarProducto); //Define la ruta PUT para actualizar un producto por ID.

module.exports = router; //Exporta el router para usarlo en app.js
