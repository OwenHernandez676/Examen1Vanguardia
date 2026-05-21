const mongoose = require('mongoose'); 
 
const conectarDB = async () => {  

    try { 

        await mongoose.connect('mongodb+srv://owenhernandezreyes18_db_user:Owen12345@cluster0.bsdtosk.mongodb.net/test?appName=Cluster0');  

        console.log('MongoDB conectado'); 

    } catch (error) {

        console.log(error);

    }

}

module.exports = conectarDB;  

