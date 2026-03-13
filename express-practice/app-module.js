const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render("index", { name: "Kenenisa Beyan" });
});

app.post('/submit', (req, res) => {
  res.send('Form submitted!');
});

const PORT = 3000;  

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});