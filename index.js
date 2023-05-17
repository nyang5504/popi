console.clear();
import express from 'express'
import { createClient } from 'redis'
//const express = require('express')

const app = express()
app.use(express.json())
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

const client = createClient(); 
client.on('error', (err) => console.log('Redis Client Error'));
await client.connect(6379); 

//const value = await client.get('key');
//await client.disconnect();

//receiving comments (writing)
app.post('/album/:id/comment', async (req, res) => { 

    console.log(req.params.id);
    console.log(req.body);
    //var arr = [req.body.comment];
    const currComments = await client.get(req.params.id);
    const arr = JSON.parse(currComments);
    arr.push(req.body.comment);
    
    await client.set(req.params.id, JSON.stringify(arr));
    res.send();
  })

//getting comments (reading)
app.get('/album/:id/comment', async (req, res) => { 
     const comment = await client.get(req.params.id);
     res.send(comment);

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})