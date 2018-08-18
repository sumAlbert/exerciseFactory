//read_line() 赛码网
//readline() 牛客网
// 有些函数在tool里面，需要取出来
const { read_line, readline, print } = require('../../lib/platform');
const tool = require('../../lib/tool');
const outputFn = () => {
  // code
  let currentLine = null;
  while (currentLine = readline()) {
    const inputArr = currentLine.split(' ').map(v => parseInt(v));
    let i = 0;
    while(i < inputArr.length) {
      const currVal = inputArr[i];
      const leftVal = inputArr[i - 1] || Infinity;
      const rightVal = inputArr[i + 1] || Infinity;
      if(currVal === 1 && (leftVal !== Infinity || rightVal !== Infinity)) {
        if(leftVal < rightVal) {
          inputArr.splice(i - 1, 2, leftVal + 1);
        } else {
          inputArr.splice(i, 2, rightVal + 1);
        }
      }
      i++;
    }
    const result = inputArr.reduce((prev, curr) => {
      return prev * curr
    })
    print(result);
  }
}

module.exports = () => {
  outputFn();
  debugger
}