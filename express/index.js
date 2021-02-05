const fs = require('fs');
// require express
const express = require('express');
// create object and add port
const app = express();
const port = 6500;

// Displaying JSON data into browser
app.get('/',(req,res) => {
    fs.readFile('./db.json',(err,result) => {
        if(err){
            throw err;
        }else {
            res.send(JSON.parse(result))
        }
    })
})


// Create server to listen on port
app.listen(port,(err) => {
    console.log('server is running on port '+port);
    console.log('http://localhost:'+port); //running on localhost
    // http://localhost:8082 after nginx
})