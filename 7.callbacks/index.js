const fs = require('fs')


function person (name, callbackFn){
  console.log(`Hello ${name}`);
  callbackFn();
}

function address(address){
  console.log("Ethiopia");
}

person("Kenenissa Beyan", address);

fs.readFile('input.text', 'utf8', (err, data)=> {
  if (err){
    console.error('Error reading file', err)
    return
  }

  console.log(data);
});