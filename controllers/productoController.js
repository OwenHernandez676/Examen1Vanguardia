const Producto = require('../models/producto'); //Importamos el modelo para interactuar con MongoDB


//CREATE (POST)
const crearProducto = async (req, res) => { //Función asincrona porque interactúa con MongoDB que toma tiempo.

    try {

        const producto = new Producto(req.body); //new Producto crean nuevo documento en MongoDB con los datos que vienen en el body del request.

        await producto.save(); //save() Guarda en MongoDB.

        res.json(producto); //res.json() responde json al cliente

    } catch (error) {

        console.log(error);

    }

}

//GET OBTENER TODOS
const obtenerProductos = async (req, res) => {

    try {

        const productos = await Producto.find(); //find() busca todos los documentos

        res.json(productos);

    } catch (error) {

        console.log(error);

    }

}

//GET POR ID OBTENER UNO
const obtenerProducto = async (req, res) => {

    try {

        const producto = await Producto.findById(req.params.id); //req.params.id captura el id que viene en la URL. Ejemplo: localhost:3000/api/productos/123

        res.json(producto);

    } catch (error) {

        console.log(error);

    }

}

//UPDATE (PUT)
const actualizarProducto = async (req, res) => {

    try {

        const producto = await Producto.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }  //new: true devuelve el documento actualizado.
        );

        res.json(producto);

    } catch (error) {

        console.log(error);

    }

}

module.exports = {

    crearProducto,
    obtenerProductos,
    obtenerProducto,
    actualizarProducto
}