const express = require('express');
const app = express();

const requistTimestampLogger = (req, res, next) => {
  const timeStamp = new Date().toISOString();

  console.log(`$timeStemp} from ${req.method} ${req.url}`);
  next(); 
}