const express = require('express');
const app = express();

//define a middleware function
const myMiddleware = (req, res, next) => {
  console.log("This is a middleware function");
  // Middleware logic here
  next(); // Call the next middleware or route handler
};

app.use(myMiddleware); // Use the middleware for all routes

app.get("/about", (req, res) => {
  res.send ("Hello, World!");
} );

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});