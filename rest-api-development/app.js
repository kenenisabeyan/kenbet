const express = require("express");
const app = express();  

app.use(express.json());

let books = [
  { id: 1, title: "Book One", author: "Author One" },
  { id: 2, title: "Book Two", author: "Author Two" },
];  