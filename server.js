


const express = require('express');
const bodyParser = require('body-parser');
const Redis = require('redis');
const app = express();
const port = 3000;
const reddisClient = Redis.createClient();


app.use(bodyParser.json()); 

app.listen(port, ()=>{

    reddisClient.connect();
    console.log("Listening on port:"+ port);
})


app.get('/',(req,res)=>{
    res.send("Welcome to my Node Server");
})



app.post('/login',(req,res)=>{
    const loginBody = req.body;
    const userName = loginBody.userName;
    if (password==="Supersafe123!"){
        res.send("Welcome"+userName);
    } else {
        res.status(401);
        res.send("Incorrect password")
    }
        

})