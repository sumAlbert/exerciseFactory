//read_line() 赛码网
//readline() 牛客网
// 有些函数在tool里面，需要取出来
const { read_line, readline, print } = require('../../lib/platform');
const tool = require('../../lib/tool');
const outputFn = () => {
  // code
  let currentLine = null;
  while(currentLine = readline()) {
    const Aarr = currentLine.split('');
    const Barr = readline().split('');
    let result = 0;
    [...new Array(Aarr.length + 1).keys()].forEach(v => {
      const midArr = [].concat(Aarr);
      Array.prototype.splice.apply(midArr, [v, 0, ...Barr]);
      const midStr = midArr.join('');
      const midStrReverse = midArr.reverse().join('');
      result = midStrReverse === midStr ? result + 1 : result;
    })
    print(result);
  }
}

module.exports = () => {
  outputFn();
  debugger
}