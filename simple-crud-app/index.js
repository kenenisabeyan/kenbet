const express = require('express');
const mongoose = require('mongoose');
const app = express()

app.listen(3000, () =>{
  console.log("Server is running on port 3000");

});

app.get('/', (req, res) =>{
  res.send("Hello fron node API server updated")

});

mongoose.connect("mongodb+srv://keno_astu:keno30772@backenddb.oanerac.mongodb.net/Node-API?appName=BackendDB")
.then(()=>{
  console.log("Connected to database");
});
.catch(()=>{
  console.log("Connection failed!");

});