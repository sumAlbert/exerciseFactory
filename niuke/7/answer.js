//read_line() 赛码网
//readline() 牛客网
// 有些函数在tool里面，需要取出来
const { read_line, readline, print } = require('../../lib/platform');
const tool = require('../../lib/tool');
const outputFn = () => {
  // code
  let currentLine = null;
  while (currentLine = readline()) {
    const n = parseInt(currentLine);
    let xArr = readline().split(' ');
    xArr.length = n;
    xArr.map(v => parseInt(v));
    let yArr = readline().split(' ');
    yArr.length = n;
    yArr.map(v => parseInt(v));

    const midArr = xArr.map((v, i) => {
      const currY = yArr[i];
      const currX = v;
      const distance = Math.abs(currX - 1) + Math.abs(currY - 1);
      return distance;
    });

    const result = midArr.reduce((prev, curr) => {
      prev = Math.min(prev, curr);
      return prev;
    }, Infinity);

    print(result);
  }
}

module.exports = () => {
  outputFn();
  debugger
}