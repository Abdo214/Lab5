/* allows access to the 'environment variables' (.env file) */ 
require('dotenv').config() 
 
/*  import express and cors 2 */ 
const express = require('express') 
const cors = require('cors') 
 
/*  create the server and define the port */ 
const server = express() 
const port = process.env.PORT || 8001

/*  use cors and express.json (which a body-parser for incoming requests) */ 
server.use(cors()) 
server.use(express.json()) 
 
/* basic route to access the application in the browser */ 
server.get('/', (req, res) => { 
    res.send('<h1>This is a test application</h1>') 
}) 
 
/* Listen to the port in the variable and display a message */ 
server.listen(port, () => { 
    console.log(`\n=== Server listening on port ${port} ===\n`) 
}) 