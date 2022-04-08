const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath));

app.listen(process.env.PORT ||000, ()=>{
    console.log("Servidor corriendo ok");
});

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, './views/home.html'));
});

app.get('/registro', (req, res) =>{
    res.sendFile(path.join(__dirname, './views/register.html'));
});

app.get('/ingresar', (req, res) =>{
    res.sendFile(path.join(__dirname, './views/ingresar.html'));
});