const mongoose = require('mongoose');  //Importamos Mongoose.
 
const conectarDB = async () => {  //Porque conectar MongoDB toma tiempo.

    try { //el try catch evita que el sistema no se rompe completamente.

        await mongoose.connect('mongodb+srv://owenhernandezreyes18_db_user:Owen12345@cluster0.bsdtosk.mongodb.net/?appName=Cluster0');  //Espera la respuesta de MongoDB.

        console.log('MongoDB conectado'); 

    } catch (error) {

        console.log(error);

    }

}

module.exports = conectarDB;  //Exporta la función para usarla en app.js