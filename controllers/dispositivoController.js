const Dispositivo = require('../models/dispositivo');

//CREATE
const crearDispositivo = async (req, res) => {
    try {
        const dispositivo = new Dispositivo(req.body);
        await dispositivo.save();
        res.json(dispositivo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

//GET 
const obtenerDispositivos = async (req, res) => {
    try {
        const dispositivos = await Dispositivo.find();
        res.json(dispositivos);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

//GET POR ID OBTENER UNO
const obtenerDispositivo = async (req, res) => {

    try {
        const dispositivo = await Dispositivo.findById(req.params.id);
        if (!dispositivo) {
            return res.status(404).json({ error: 'Dispositivo no encontrado' });
        }
        res.json(dispositivo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

}

//UPDATE
const actualizarDispositivo = async (req, res) => {

    try {
        const dispositivo = await Dispositivo.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!dispositivo) {
            return res.status(404).json({ error: 'Dispositivo no encontrado' });
        }
        res.json(dispositivo);

    } catch (error) {

        res.status(400).json({ error: error.message });
    }

}

//DELETE 
const eliminarDispositivo = async (req, res) => {

    try {

        const dispositivo = await Dispositivo.findByIdAndDelete(req.params.id);
    } catch (error) {

        res.status(400).json({ error: error.message });

    }
}
module.exports = {
    crearDispositivo,
    obtenerDispositivos,
    obtenerDispositivo,
    actualizarDispositivo,
    eliminarDispositivo


}
