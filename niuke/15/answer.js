//read_line() 赛码网
//readline() 牛客网
// 有些函数在tool里面，需要取出来
const { read_line, readline, print } = require('../../lib/platform');
const tool = require('../../lib/tool');
const outputFn = () => {
  // code
  let currentLine = null;
  while(currentLine = readline()) {
    const [n, m] = currentLine.split(' ').map(v => parseInt(v));
    const columnArr = readline().split(' ').map(v => parseInt(v));
    columnArr.length = m;
    const totalArr = columnArr.reduce((prev, curr) => {
      prev[curr - 1] += 1;
      return prev;
    }, [...new Array(n).keys()].map(v => 0));
    const minResult = totalArr.reduce((prev, curr) => {
      return Math.min(prev, curr);
    }, Infinity);
    print(minResult);
  }
}

module.exports = () => {
  outputFn();
  debugger
}