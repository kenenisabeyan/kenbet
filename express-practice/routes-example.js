const express = require('express');
const app = express();


app.get("/", (req, res) => {
  res.send ("Hello, World!");
} ); 

//get all products
app.get("/products", (req, res) => {
  const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
    { id: 4, name: "Product 4", price: 40 },
    { id: 5, name: "Product 5", price: 50  }
  ];
  res.json(products); 
} );

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
} );