const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userroute = require('./routes/users-routes.js');
const produtsroute = require('./routes/products-routes.js');
require('dotenv').config()


server.use(bodyParser.urlencoded({extended:false}));
server.use(bodyParser.json());


const dbURL = process.env.DB_URL

const dbConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

server.use('/user',userroute);
server.use('product',produtsroute);
mongoose
.connect(dbURL,dbConfig)
.then(()=>{
    console.log('DB is connection.')
})
.catch(
    (connectionError)=>{
console.log('connection connection error',dbError)
    }
);

server.get('/',(req,res)=>{
    res.send('Sooo you are here now, What now')
});

server.get('/about',(req,res)=>{
    res.send('Nothing here')
});



server.get('/contact',(req,res)=>{
    res.send('Call me its +9712234342')
});



server.get('/product',(req,res)=>{
    res.send('I have nothing to offer :(')
});



// server.post('/update',(req,res)=>{
//     const updatedModelPrice = {
//         'model':req.body.model,
//     };
//     ProductModel
//     .findOneAndUpdate(req.body.brand,updatedModelPrice,{new:true})
//     .then((dbDocumment)=>{
//         res.json(dbDocumment)
//     }).catch((error)=>{
//         console.log('/find error',error);
//         res.send('An error occured')
//     })
// });


server.listen(process.env.PORT,()=>{
    console.log("We are live @ port 3001")
});





