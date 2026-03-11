const fs = require('fs');
const path = require('path');

const dataFolder = path.join(__dirname, 'data');

// Create data folder if it doesn't exist
if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log('Data folder created');
}

const filePath = path.join(dataFolder, 'example.txt');

fs.writeFileSync(filePath, 'Hello, this is a sample file created using Node.js!');
console.log('File created successfully');