//read_line() 赛码网
//readline() 牛客网
// 有些函数在tool里面，需要取出来
const { read_line, readline, print } = require('../../lib/platform');
const tool = require('../../lib/tool');
const outputFn = () => {
  // code
  const RESULT_KIND = [
    'none',
    'lexicographically',
    'lengths',
    'both'
  ]
  let currentLine = null;
  const isDict = (inputArr) => {
    const oldStr = [].concat(inputArr).join(',');
    const newArr = [].concat(inputArr);
    newArr.sort((a, b) => a < b ? -1 : 1);
    const newStr = newArr.join(',');
    return newStr === oldStr;
  }
  const isLen = (inputArr) => {
    const oldStr = [].concat(inputArr).join(',');
    const newArr = [].concat(inputArr);
    newArr.sort((a, b) => a.length < b.length ? -1 : 1);
    const newStr = newArr.join(',');
    return newStr === oldStr;
  }
  while(currentLine = readline()) {
    let n = parseInt(currentLine);
    const inputArr = [];
    while(n > 0) {
      currentLine = readline();
      inputArr.push(currentLine);
      n--;
    }
    let result = isDict(inputArr) ? 1 : 0;
    result += isLen(inputArr)? 2 : 0;
    print(RESULT_KIND[result]);
  }
}

module.exports = () => {
  outputFn();
  debugger
}