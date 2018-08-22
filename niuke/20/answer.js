//read_line() 赛码网
//readline() 牛客网
const { read_line, readline, print } = require('../../lib/platform');
const { smallCharacter } = require('../../lib/tool');
const outputFn = () => {
  // code
  const smallCharacter = 'abcdefghijklmnopqrstuvwxyz';
  const dictArr = smallCharacter.split('');
  const dictMap = dictArr.reduce((prev, curr, idx) => {
    prev[curr] = idx;
    return prev;
  }, {});
  let currentLine = null;
  while (currentLine = readline()) {
    const targetArr = currentLine.split('');
    const dp = targetArr.reduce((prev, curr) => {
      const dpVal = prev.reduce((midPrev, midCurr, midIdx) => {
        const lastOrder = dictMap[targetArr[midIdx]];
        const currOrder = dictMap[curr];
        if (currOrder >= lastOrder) {
          const tempDpVal = [].concat(midCurr);
          if (tempDpVal.length >= midPrev.length) {
            return tempDpVal;
          }
        }
        return midPrev;
      }, []);
      dpVal.push(curr);
      prev.push(dpVal);
      return prev;
    }, []);
    const result = dp.reduce((prev, curr) => {
      if (prev.length <= curr.length) {
        return curr;
      } else {
        return prev;
      }
    }, []);
    print(result);
  }
}

module.exports = () => {
  outputFn();
  debugger
}