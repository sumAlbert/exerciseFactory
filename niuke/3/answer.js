//read_line() 赛码网
//readline() 牛客网
const { read_line, readline, print } = require('../../lib/platform');
const outputFn = () => {
  // code
  let currentLine = null;
  while (currentLine = readline()) {
    let [n, k] = currentLine.split(' ').map(v => parseInt(v));
    let targetArr = readline().split(' ').map(v => parseInt(v));
    targetArr.length = n;
    let waitMidArr = [...new Array(n).keys()].map((v) => (parseInt(v) + 1));
    targetArr.forEach(v => {
      let index = waitMidArr.indexOf(v);
      if (index !== -1) {
        waitMidArr.splice(index, 1);
      }
    });
    let waitArr = targetArr.map(v => {
      return v === 0 ? [].concat(waitMidArr) : [v];
    })

    let compK = 0;
    let recursiveArr = [];
    let result = 0;
    const recursive = (i) => {
      if (compK > k) {
        return null;
      }
      if (i === n) {
        if (compK === k) {
          result++;
        }
        return null;
      }
      const tempWaitArr = waitArr[i];
      tempWaitArr.forEach((v) => {
        let addK = recursiveArr.reduce((prev, curr) => {
          if (prev === -1) return prev;
          const midDiff = v - curr;
          if (midDiff > 0) {
            return prev + 1;
          } else if (midDiff === 0) {
            return -1;
          } else {
            return prev;
          }
        }, 0);
        if (addK !== -1) {
          recursiveArr.push(v);
          compK += addK;
          recursive(i+1);
          compK -= addK;
          recursiveArr.pop();
        }
      });
    }

    recursive(0);
    print(result);
  }
}

module.exports = () => {
  outputFn();
  debugger
}