const express = require("express");
const path = express();

  const app = express();

  app.set("view engine", "ejs");

  app.set("views", path.join(__dirname, "views"));

  const products = [
    { name: "Product 1", price: 10 },
    { name: "Product 2", price: 20 },
    { name: "Product 3", price: 30 },
  ];  

  app.get("/", (req, res) => {
    res.render("index", { title: "Home Page" });
  });

  app.get("/products", (req, res) => {
    res.render("products", { title: "Products Page", products });
  });

  const PORT = 3000;    

  app.get("/about", (req, res) => {
    res.render("about", { title: "About Us" });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });   