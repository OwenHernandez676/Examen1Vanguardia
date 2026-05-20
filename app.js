const express = require('express'); //Importamos express para crear el servidor

const conectarDB = require('./config/db'); //Importamos la función para conectar a MongoDB

const productoRoutes = require('./routes/productoRoutes');

const app = express();    //crea el servidor

conectarDB();  //Llama a la función para conectar a MongoDB.

app.use(express.json());  //Middleware que permite leer JSON.

app.use(productoRoutes); //Usa las rutas de productos para manejar los endpoints relacionados a productos.)

app.get('/', (req, res) => {  //Definimos el endpoint GET para realizar request y response

    res.send('API funcionando correctamente');

});

app.listen(3000, () => {  //Levanta servidor en puerto 3000.

    console.log('Servidor corriendo en puerto 3000');

});