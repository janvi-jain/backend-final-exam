const dotenv = require('dotenv')
dotenv.config();

const express = require('express');
const bodyparser = require('body-parser')
const routes = require('./routes/index')
const db = require('./config/db')

const port = process.env.PORT || 5000
const app = express();
db;

app.use(express.json())
app.use(bodyparser.urlencoded({extended:true}))

app.use('/api',routes)

app.listen(port,(err)=> {
    if(!err){
        console.log("server started on port http://localhost:${port}")
    }
})
