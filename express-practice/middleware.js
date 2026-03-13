const express = require('express');
const app = express();

//define a middleware function
const myMiddleware = (req, res, next) => {
  console.log("This is a middleware function");
  // Middleware logic here
  next(); // Call the next middleware or route handler
};

app.use(myMiddleware); // Use the middleware for all routes

app.get("/", (req, res) => {
  res.send ("Hello, World!");
} );