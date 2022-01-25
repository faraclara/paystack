//MENGIMPORT 3PARTY TEMPLATE
//express ; server dengan port,,mengatur middleware ktk menyiapkan viewengine didlm port tsb
//bodyParser ; mengubah body jadi json
//pug mesin tamplate untuk view tsb
//lodash memanipulasi object dengan array
//donor untuk model monggodb ketika berinteraksi dengan
// DEBUG:

const express = require ('express');
const request = require ('request');
const bodyParser = require('body-parser');
const pug = require('pug');
const _ = require('lodash');
const path = require('path');


const {Donor} = require ('./models/donor');
const {initializePayment, verifyPayment} = require ('./config/paystack')(request);


const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//menyiapkan middleware; ketika apk meparcing permintaan/request didlm object pugbody
app.use(express.static(path.join(__dirname, 'public/')));
app.set('view engine', pug);


app.get('/', (req, res) => {
  res.render('index.pug');
});

app.listen(port, () => {
console.log(`App running on port ${port}`)
});
