const express = require('express');

const router = express.Router();

const {
    crearDispositivo,
    obtenerDispositivos,
    obtenerDispositivo,
    actualizarDispositivo,
    eliminarDispositivo

    
} = require('../controllers/dispositivoController');

router.post('/api/dispositivotec', crearDispositivo);
router.get('/api/dispositivotec', obtenerDispositivos);
router.get('/api/dispositivotec/:id', obtenerDispositivo);
router.put('/api/dispositivotec/:id', actualizarDispositivo);
router.delete('/api/dispositivotec/:id', eliminarDispositivo);

module.exports = router;