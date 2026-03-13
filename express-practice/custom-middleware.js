const express = require('express');
const app = express();

const requistTimestampLogger = (req, res, next) => {
  const timeStamp = new Date().toISOString();

  console.log(`$timeStemp} from ${req.method} ${req.url}`);
  next(); 
};

app.use(requistTimestampLogger);

app.get("/about", (req, res) => {
  res.send ("Hello, World!");
} );  

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});