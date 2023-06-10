const express = require ('express');
const Mongoose  = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const postRoute = require ('./routes/post');
const res = require('express/lib/response');
const req = require('express/lib/request');

app.use('/servicios',postRoute);


app.get('/',(req,res)=>{

    res.send('hola mundo');


});

app.post('/',(req,res) => {

    res.send('dato recibido');
})





Mongoose.connect('mongodb+srv://sadvasquez:<S%a%m0%443%2>@cluster1.4zvxfkz.mongodb.net/?retryWrites=true&w=majority',
{usenewUrlParser:true},() =>{
    console.log('conexion a BD exitosa');
});

app.listen (10000);
