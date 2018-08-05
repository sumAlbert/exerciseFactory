//read_line() 赛码网
//readline() 牛客网
// 有些函数在tool里面，需要取出来
const { read_line, readline, print } = require('../../lib/platform');
const tool = require('../../lib/tool');
const outputFn = () => {
  // code
  let currentLine = null;
  while (currentLine = readline()) {
    const n = parseInt(currentLine);
    const xArr = readline().split(' ').map(v => parseInt(v));
    xArr.length = n;
    xArr.sort((a, b) => (a - b));

    const xNewArr = xArr.filter((v) => (v !== 1));
    const oneNum = xArr.length - xNewArr.length;
    const xNewArrIdx = [...xNewArr].map(v => parseInt(v));

    const DFShelper = [];
    const DFSresult = {}; 
    let DFSsum = 0;
    let DFSplus = 0;
    const DFS = () => {
      const diff = DFSplus - DFSsum;
      DFSplus = DFSplus === 0 ? 1 : DFSplus;
      if (diff >= oneNum) {
        return null;
      }
      const DFSresultKey = DFShelper.join(',');
      if (DFSresultKey !== '') {
        DFSresult[DFSresultKey] = Math.max(diff + 1, 0);
      }

      xNewArrIdx.forEach((v, i) => {
        const vIdx = DFShelper.indexOf(i);
        if (vIdx === -1) {
          DFSsum += v;
          DFSplus *= v;
          
          DFShelper.push(i);
          DFS();
          DFShelper.pop();
          
          DFSplus /= v;
          DFSsum -= v;
        }
      })
    }
    DFS();

    const DFSMidResult = Object.entries(DFSresult).reduce((prev, curr) => {
      const currStr = curr[0].split(',').map(v => xNewArr[v]).sort().join(',');
      prev[currStr] = curr[1];
      return prev;
    }, {});

    DFSresultArr = Object.entries(DFSMidResult);
    const midResult = DFSresultArr.reduce((prev, curr) => {
      const result = prev + oneNum - curr[1] + 1;
      return result;
    }, 0);
    const result = midResult + oneNum - 1;
    print(result);
  }
}

module.exports = () => {
  outputFn();
  debugger
}