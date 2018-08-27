//read_line() 赛码网
//readline() 牛客网
const { read_line, readline, print } = require('../../lib/platform');
const { C } = require('../../lib/tool');
const outputFn = () => {
  // code
  const dictStr = '1 2 3 4 5 6 7 8 9 10 11 12 13';
  const dictIdx = dictStr.split(' ');
  const MAXNUM = 4;
  const dictObj = dictIdx.reduce((prev, curr, idx) => {
    prev.dictMap[curr] = idx;
    prev.numMap[curr] = MAXNUM;
    return prev;
  }, {
    dictMap: {},
    numMap: {},
  });
  const dictMap = dictObj.dictMap;
  let currentLine = null;
  while(currentLine = readline()) {
    const numMap = Object.assign({}, dictObj.numMap);
    const boyCards = currentLine.split(' ');
    const girlCards = readline().split(' ');
    const boySum = boyCards.reduce((prev, curr) => {
      numMap[curr] -= 1;
      return prev + dictMap[curr];
    }, 0);
    const girlSum = girlCards.reduce((prev, curr) => {
      numMap[curr] -= 1;
      return prev + dictMap[curr];
    }, 0);
    const diff = girlSum - boySum + 1;
    const ratio = dictIdx.reduce((prev, curr, idx) => {
      const boyRatio = numMap[curr] / 46;
      if(boyRatio > 0) {
        numMap[curr] -= 1;
        let girlEndIdx = idx - diff;
        let girlTotalNum = 0;
        girlEndIdx = Math.min(girlEndIdx, dictIdx.length - 1);
        for(let i = 0; i <= girlEndIdx; i++) {
          girlTotalNum += numMap[dictIdx[i]];
        }
        const girlRatio = girlTotalNum / 45;
        prev += boyRatio * girlRatio;
        numMap[curr] += 1;
      }
      return prev;
    }, 0)
    print(ratio.toFixed(4));
  }
}

module.exports = () => {
  outputFn();
  debugger
}