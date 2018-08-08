//read_line() 赛码网
//readline() 牛客网
// 有些函数在tool里面，需要取出来
const { read_line, readline, print } = require('../../lib/platform');
const tool = require('../../lib/tool');
const outputFn = () => {
  // code
  const primeArr = [...new Array(997).keys()].map(v => v + 2).filter(v => {
    const midNum = Math.floor(Math.pow(v, 1/2));
    let i = 2;
    while(i <= midNum){
      const remainder = v % i;
      if (remainder === 0) {
        return false;
      }
      i++;
    }
    return true;
  })
  let currentLine = null;
  while(currentLine = readline()) {
    const n = parseInt(currentLine);
    const satisfyArr = primeArr.filter(v => {
      const diff = n - v;
      const index = primeArr.indexOf(diff);
      return index !== -1;
    })
    const result = Math.floor((satisfyArr.length + 1) / 2)
    print(result);
  }
}

module.exports = () => {
  outputFn();
  debugger
}