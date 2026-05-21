const mongoose = require('mongoose');

const dispositivoSchema = new mongoose.Schema({

    codigoDispositivo: {
        type: String,
        required: [true, 'código del dispositivo requerido'],
        validate: {
            validator: function(v) {
                return /^[0-9]+\.[0-9]+$/.test(v);
            },
            message: 'código debe tener formato: número.número'
        }
    },

    tipoDispositivo: {
        type: String,
        required: [true, 'tipo dispositivo es requerido'],
        enum: ['laptop', 'tablet', 'monitor', 'impresora', 'proyector']
    },

    marca: {
        type: String,
        default: 'Por defecto'
    },

    cantidadDisponible: {
        type: Number,
        required: [true, 'cantidad disponible es requerida'],
        validate: {
            validator: function(v) {
                return v >= 0;
            },
            message: 'cantidad debe ser un número positivo'
        }
    }
});
module.exports = mongoose.model('Dispositivo', dispositivoSchema);
