//read_line() 赛码网
//readline() 牛客网
const { read_line, readline, print } = require('../../lib/platform');
const { smallCharacter } = require('../../lib/tool');
const outputFn = () => {
  // code
  const read = (arr, idxs = [], emptyVal = undefined) => {
    const MAXDEEP = idxs.length - 1;
    if(idxs.length === 0) {
      return arr;
    }
    const level = idxs.reduce((prev, curr, idx) => {
      if(idx !== MAXDEEP) {
        prev = prev[curr] || [];
      } else {
        lastIdx = curr;
      }
      return prev;
    }, arr);
    return level[lastIdx] === undefined ? emptyVal: level[lastIdx];
  }

  const write = (arr, idxs = [], val) => {
    let currLev = arr, idx, i;
    if (idxs.length === 0) {
      return;
    }
    for (i = 0; i < idxs.length - 1; i++) {
      idx = idxs[i];
      if (currLev[idx] === undefined) {
        currLev[idx] = [];
      }
      currLev = currLev[idx];
    }
    idx = idxs[i];
    currLev[idx] = val; 
  }

  const a = [];
  write(a, [1, 2], 'test');
  console.log(a);
}

module.exports = () => {
  outputFn();
  debugger
}