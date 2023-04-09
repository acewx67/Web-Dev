const express = require('express');
const app = express();

const bodyParser = require('body-parser');

//specificaly parse JSON data and add it to the request.body object
app.use(bodyParser.json());

app.listen(3000,()=>{
    console.log('server started at port 3000');
})

app.get('/',(req,res)=>{
    res.send('hello world');
})

app.post('/api/cars',(req,res)=>{
    const {name,brand} = req.body;
    console.log(name);
    console.log(brand);
    request.send("submitted");
})