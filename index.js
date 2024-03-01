const express = require('express');
const app = express();
const alumno = require('./routes/alumno')
const port = process.env.PORT || 3000;

app.use(express.json()); // Para que la api sepa que puede recibir JSON
app.use('/',alumno)



//Función callback
app.listen(port, () => {
    console.log(`Connected to port ${port}`);

});