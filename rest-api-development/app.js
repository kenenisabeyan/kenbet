const express = require("express");
const app = express();  

app.use(express.json());

let books = [
  { id: 1, title: "Book One", author: "Author One" },
  { id: 2, title: "Book Two", author: "Author Two" },
];  

app.get("/books", (req, res) => {
  res.json({
    message: "Books retrieved successfully",
    data: books,
  });
});

app.get('/get' , (req, res) => {
  res.json({
    message: "Books retrieved successfully",
    data: books,
  });
});   


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 