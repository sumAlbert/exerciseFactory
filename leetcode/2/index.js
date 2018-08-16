const answer = require('./answer.js');
const data = require('./data.js');

const app = () => {
  console.log(`最后输出：${answer(data)}`);
}

module.exports = app;