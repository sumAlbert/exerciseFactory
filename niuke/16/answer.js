//read_line() 赛码网
//readline() 牛客网
// 有些函数在tool里面，需要取出来
const { read_line, readline, print } = require('../../lib/platform');
const tool = require('../../lib/tool');
const outputFn = () => {
  // code
  let currentLine = null;
  while(currentLine = readline()){
    const [n, k] = currentLine.split(' ').map(v => parseInt(v));
    const pointArr = readline().split(' ').map(v => parseInt(v));
    const wakeArr = readline().split(' ').map(v => parseInt(v))
    pointArr.length = n;
    wakeArr.length = n;
    const minPoint = pointArr.reduce((prev, curr, idx) => {
      if(idx < k || wakeArr[idx]) {
        prev += curr
      }
      return prev;
    }, 0);
    let i = 0;
    let j = k;
    let result = minPoint;
    let midResult = minPoint;
    while(j < n) {
      if(!wakeArr[i]) {
        midResult -= pointArr[i];
      }
      if(!wakeArr[j]) {
        midResult += pointArr[j];
      }
      result = Math.max(midResult, result);
      j++;
      i++;
    }
    print(result);
  }
}

module.exports = () => {
  outputFn();
  debugger
}