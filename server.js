const express = require('express');
const bodyParser = require('body-parser');
const Redis = require('redis');
const { createHash } = require("node:crypto");

const app = express();

const port = 3000;


const redisClient = Redis.createClient({url:'redis://127.0.0.1:6379'});
app.use(bodyParser.json());


app.listen(port, ()=>{

    redisClient.connect();
    console.log("Listening on port:"+ port);
});


app.get('/',(req,res)=>{
    res.send("Welcome to my Node Server");
})



app.post('/login',async (req,res)=>{
    const loginBody = req.body;
    const userName = loginBody.userName;
    const password = loginBody.password; // we need to hash
    const hashedPassword = password==null? null : createHash('sha3-256').update(password).digest('hex');
    console.log("Hashed Password: "+hashedPassword);
    const redisPassword = password==null ? null : await redisClient.hGet('hashedpasswords',userName);
    // const hashedpassword = createHash('sha3-256').update(password).digest('hex');
    // console.log("Hashed password: "+hashedpassword);
    // const redisPassword = await redisClient.hGet('hashedpassword',userName);
    console.log("Redis password for: "+ userName+": "+redisPassword);
    if (hashedPassword===redisPassword){
        res.send("Welcome"+userName);
    } else {
        res.status(401);
        res.send("Incorrect password");
    }
        

});



