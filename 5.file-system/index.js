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


const readContentFromFile = fs.readFileSync(filePath, 'utf-8');
console.log('Content of the file:', readContentFromFile);

fs. appendFileSync(filePath, '\nThis line is appended to the file.');
console.log('Content appended to the file successfully.');

const asyncFilePath = path.join(dataFolder, 'async-example.txt');

fs.writeFile(asyncFilePath, "This is an asynchronous file write example.", (err) => {
  if (err)  throw err;
  console.log('Asynchronous file created successfully.'); 

  fs.readFile(asyncFilePath, 'utf-8', (err, data) => {
    if (err) throw err;
    console.log('Content of the asynchronous file:', data);

    fs.appendFile(asyncFilePath, '\nThis line is appended asynchronously.', (err) => {
      if (err) throw err;
      console.log('Content appended to the asynchronous file successfully.');

      fs.readFile(asyncFilePath, 'utf-8', (err, updatedData) => {
        if (err) throw err;
        console.log('Updated content of the asynchronous file:', updatedData);
      }); 

    }); 
  });
});