const fs = require('fs');
const { save, printAll} = require('../../lib/platform');
const answer = require('./answer.js');

const app = (path) => {
  fs.readFile(path, 'utf-8',(err, data) => {
    save(data);
    answer();
    printAll();
  });
}
module.exports = app;