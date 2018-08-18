const fs = require('fs');
const path = require('path');
const { save, printAll} = require('../../lib/platform');
const answer = require('./answer.js');

const app = () => {
  fs.readFile(path.join(__dirname, 'data.txt'), 'utf-8',(err, data) => {
    save(data, '\n');
    answer();
    printAll();
  });
}
module.exports = app;