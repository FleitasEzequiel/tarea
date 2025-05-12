const express = require('express');
const app = express();
const cors = require("cors")
const port = 3000;
app.use(cors({
    origin:"*"
}))
const nombresPermitidos = ["MARIANO","GASTON","PEDRO","NAHUEL"]
const nombresNOPermitidos = ["TATI","ANA","TATIANA","YAMI","LA","YAMILA","TATIANA YAMILA MEDINA","46.395.541"]
app.get('/saludo/:nombre', (req, res) => {
const nombre = req.params.nombre;
if (!(nombresPermitidos.includes(nombre.toUpperCase()))) return res.send('Ese nombre no se acepta en esta casa.')
res.send(`Hola, ${nombre}!`);
});

app.get('/saludovip/:nombre', (req,res)=>{
    const nombre = req.params.nombre;
    if (nombresNOPermitidos.includes(nombre.toUpperCase())) return res.send('Ese nombre está maldito.')
    res.send(`Hola, ${nombre}!`)
})
app.listen(port, () => {
console.log(`Servidor escuchando en el puerto ${port}`);
});
// app.get('/')