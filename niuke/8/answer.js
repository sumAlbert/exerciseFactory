//read_line() 赛码网
//readline() 牛客网
// 有些函数在tool里面，需要取出来
const { read_line, readline, print } = require('../../lib/platform');
const tool = require('../../lib/tool');
const outputFn = () => {
  // code
  const f = v => 4 * v + 3;
  const g = v => 8 * v + 7;
  const DIVISOR = 1000000007;
  let currentLine = null;
  while(currentLine = readline()) {
    let x = parseInt(currentLine, 10);
    let base = x;
    let result = Infinity;
    [0,1,2].forEach((v) => {
      let variable = base;
      let count = v;
      while(count <= 100000) {
        const remainder = variable % DIVISOR;
        if (remainder === 0) {
          result = Math.min(result, count);
          break;
        }
        variable = g(variable) % DIVISOR;
        count++;
      }
      base = f(base) % DIVISOR;
    })
    result = isFinite(result) ? result : -1;
    print(result);
  }
}

module.exports = () => {
  outputFn();
 debugger
}