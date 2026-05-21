const express = require('express'); 

const conectarDB = require('./config/db'); 

const dispositivoRoutes = require('./routes/dispositivoRoutes');

const app = express();    

conectarDB();  



app.use(express.json());  

app.use(dispositivoRoutes); 

app.get('/', (req, res) => {  

    res.send('API funcionando correctamente');

});

app.listen(3000, () => {  

    console.log('Servidor corriendo en puerto 3000');

});