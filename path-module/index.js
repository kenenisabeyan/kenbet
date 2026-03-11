const path = require('path');

console.log('Current file name:', __filename);
console.log('Current directory name:', __dirname);  

console.log('file name:', path.basename(__filename));
console.log('directory name:', path.dirname(__filename));
console.log('file extension:', path.extname(__filename)); 

const joinPath = path.join(__dirname, 'subdir', 'file.txt');
console.log('Joined path:', joinPath);

const resolvePath = path.resolve(__dirname, 'subdir', 'file.txt');
console.log('Resolved path:', resolvePath);

const normalizedPath = path.normalize('folder//subfolder///file.txt');
console.log('Normalized path:', normalizedPath);