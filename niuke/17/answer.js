//read_line() 赛码网
//readline() 牛客网
// 有些函数在tool里面，需要取出来
const { read_line, readline, print } = require('../../lib/platform');
const tool = require('../../lib/tool');
const outputFn = () => {
  // code
  let currentLine = null;
  while(currentLine = readline()) {
    const n = parseInt(currentLine);
    const appleNumArr = readline().split(' ').map(v => parseInt(v));
    const m = parseInt(readline());
    const qArr = readline().split(' ').map(v => parseInt(v));
    qArr.length = m;
    appleNumArr.length = n;
    const sumArr = appleNumArr.reduce((prev, curr, idx) => {
      const lastNum = prev[idx - 1] || 0;
      prev.push(lastNum + curr);
      return prev;
    }, []);
    const idxMap = Object.entries(qArr).sort((a, b) => a[1] < b[1] ? -1 : 1);
    const tmpQArr = [].concat(qArr).sort((a, b) => a < b ? -1 : 1);
    const resultMap = tmpQArr.reduce((prev, curr) => {
      let currSum = sumArr[prev.balanceNum];
      while(currSum && currSum < curr) {
        prev.balanceNum++;
        currSum = sumArr[prev.balanceNum];
      }
      prev.resultArr.push(prev.balanceNum + 1);
      return prev;
    }, {
      balanceNum: 0,
      resultArr: []
    });
    const results = resultMap.resultArr.reduce((prev, curr, idx) => {
      const positionInfo = idxMap[idx][0];
      prev[positionInfo] = curr;
      return prev;
    }, []);
    results.forEach(v => {
      print(v);
    })
  }
}

module.exports = () => {
  outputFn();
  debugger
}