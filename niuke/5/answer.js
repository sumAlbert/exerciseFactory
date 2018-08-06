//read_line() 赛码网
//readline() 牛客网
// 有些函数在tool里面，需要取出来
const { read_line, readline, print } = require('../../lib/platform');
const tool = require('../../lib/tool');
const outputFn = () => {
  // code
  let currentLine = null;
  while (currentLine = readline()) {
    let [w, k] = currentLine.split(' ').map(v => parseInt(v - 1));

    let result = 0;
    const kRemain = parseInt(k % 4);
    const kCount = parseInt(k / 4);
    [...new Array(w + 1).keys()].forEach((wv) => {
      result += kCount * 2
      const wvRemain = parseInt(wv % 4);
      if (wvRemain === 0 || wvRemain === 1) {
        if (kRemain === 0) {
          result += 1;
        } else {
          result += 2;
        }
      } else {
        if (kRemain === 2) {
          result += 1;
        } else if (kRemain === 3){
          result += 2;
        }
      }
    })

    print(result);
  }
}

module.exports = () => {
  outputFn();
  debugger
}