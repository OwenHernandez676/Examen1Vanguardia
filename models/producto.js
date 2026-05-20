const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({  //new mongoose.Schema define la estructura de los documentos.

    sku: {
        type: String
    },

    descripcion: {
        type: String
    },

    marca: {
        type: String
    },

    estante: {
        type: Number
    }

});

module.exports = mongoose.model('Producto', productoSchema); //Exporta el modelo para usarlo en controllers