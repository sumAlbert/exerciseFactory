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
    const xNewArrIdx = [...xNewArr.keys()].map(v => parseInt(v));

    const DFShelper = [];
    const DFSresult = {}; 
    let DFSsum = 0;
    let DFSplus = 1;
    const DFS = () => {
      const diff = DFSplus - DFSsum;
      if (diff >= oneNum) {
        return null;
      }
      const DFSresultKey = DFShelper.join('');
      DFSresult[DFSresultKey] = Math.max(diff + 1, 0);

      xNewArrIdx.forEach((v) => {
        const vIdx = DFShelper.indexOf(v);
        if (vIdx !== -1) {
          DFSsum += v;
          DFSplus *= v;
          
          DFShelper.push(v);
          DFS();
          DFShelper.pop();
          
          DFSplus /= v;
          DFSsum -= v;
        }
      })
    }
    DFS();

    DFSresultArr = Object.entries(DFSresult);
    const midResult = DFSresultArr.reduce((prev, curr) => {
      const result = prev + oneNum - curr[1] + 1;
      return result;
    }, 0);
    const result = midResult + oneNum;
    print(result);
  }
}

module.exports = () => {
  outputFn();
  debugger
}