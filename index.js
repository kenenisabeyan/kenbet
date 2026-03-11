const lodash = require('lodash');

const names = ['Kenenisa', 'delu','kidane', 'keno'];
const capitalize = lodash.map(names, lodash.capitalize);


console.log(capitalize); // Output: ['Kenenisa', 'Delu', 'Kidane', 'Keno']    