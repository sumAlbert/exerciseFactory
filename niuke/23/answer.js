//read_line() 赛码网
//readline() 牛客网
const { read_line, readline, print } = require('../../lib/platform');
const { smallCharacter } = require('../../lib/tool');
const outputFn = () => {
  // code
  let currentLine = null;
  while (currentLine = readline()) {
    const [n, k] = currentLine.split(' ').map(v => parseInt(v));
    const aArr = readline().split(' ').map(v => parseInt(v));
    aArr.length = n;
    let i = k;
    const resultSave = [];
    while (i > 0) {
      const { maxVal, maxIdx, minVal, minIdx } = aArr.reduce((prev, curr, idx) => {
        if (curr > prev.maxVal) {
          prev.maxVal = curr;
          prev.maxIdx = idx;
        }
        if (curr < prev.minVal) {
          prev.minVal = curr;
          prev.minIdx = idx;
        }
        return prev;
      }, {
          maxVal: -Infinity,
          minVal: Infinity,
          maxIdx: 0,
          minIdx: 0
        });
      if (maxVal - minVal <= 1) {
        break;
      } else {
        aArr[maxIdx] -= 1;
        aArr[minIdx] += 1;
        resultSave.push([maxIdx + 1, minIdx + 1]);
      }
      i--;
    }
    const { maxVal, minVal } = aArr.reduce((prev, curr, idx) => {
      if (curr > prev.maxVal) {
        prev.maxVal = curr;
        prev.maxIdx = idx;
      }
      if (curr < prev.minVal) {
        prev.minVal = curr;
        prev.minIdx = idx;
      }
      return prev;
    }, {
        maxVal: -Infinity,
        minVal: Infinity,
        maxIdx: 0,
        minIdx: 0
      });
      print(`${maxVal - minVal} ${resultSave.length}`);
      resultSave.forEach(v => {
        print(v.join(' '));
      });
  }
}

module.exports = () => {
  outputFn();
  debugger
}