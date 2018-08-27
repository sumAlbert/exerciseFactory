//read_line() 赛码网
//readline() 牛客网
const { read_line, readline, print } = require('../../lib/platform');
const { smallCharacter } = require('../../lib/tool');
const outputFn = () => {
  // code
  const C = (n, m) => {
    const upperNum = [...new Array(m).keys()].map(v => v + n - m + 1).reduce((prev, curr) => (prev * curr), 1);
    const bottomNum = [...new Array(m).keys()].map(v => v + 1).reduce((prev, curr) => (prev * curr), 1);
    return upperNum / bottomNum;
  }
  let currentLine = null;
  while (currentLine = readline()) {
    let [n, m, k] = currentLine.split(' ').map(v => parseInt(v));
    let lastChar;
    const totalLen = n + m;
    const resultQue = [];
    while (resultQue.length < totalLen && n !== 0 && m !== 0) {
      const totalNum = n + m - 1;
      const aNum = n - 1;
      const cmpNum = C(totalNum, aNum);
      if (k > cmpNum) {
        resultQue.push('z');
        k -= cmpNum;
        m--;
      } else {
        resultQue.push('a');
        n--;
      }
    }
    if (n === 0) {
      lastChar = 'z';
    } else {
      lastChar = 'a';
    }
    while (resultQue.length < totalLen) {
      resultQue.push(lastChar);
    }
    if (k === 1)
      print(resultQue.join(''));
    else
      print(-1);
  }
}

module.exports = () => {
  outputFn();
  debugger
}