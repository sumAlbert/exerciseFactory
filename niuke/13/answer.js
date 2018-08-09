//read_line() 赛码网
//readline() 牛客网
// 有些函数在tool里面，需要取出来
const { read_line, readline, print } = require('../../lib/platform');
const tool = require('../../lib/tool');
const outputFn = () => {
  // code
  const numInArr = (arr, target) => (arr.reduce((prev, curr) => {
    if (curr === target) {
      prev++;
    }
    return prev;
  }, 0));
  let currentLine = null;
  while (currentLine = readline()) {
    const n = parseInt(currentLine);
    const inputArr = readline().split(' ').map(v => parseInt(v));
    inputArr.length = n;
    const inputMap = inputArr.reduce((prev, curr) => {
      prev[curr] = prev[curr] === undefined ? 1 : prev[curr] + 1;
      return prev;
    }, {});
    const dpArr = [];
    let result = 1;
    while (true) {
      dpArr[result] = [];
      const resultNum = inputMap[result];
      if (resultNum) {
        dpArr[result].push([result]);
      }

      const smallerArr = inputArr.filter(v => v < result);
      const currArr = smallerArr.reduce((prev, curr) => {
        const lastInx = result - curr;
        let lastArr = dpArr[lastInx].filter(v => {
          const usedNum = numInArr(v, curr);
          const totalNum = inputMap[curr];
          return totalNum > usedNum;
        });
        backArr = lastArr.map(v => {
          const backResult = [].concat(v)
          backResult.push(curr);
          return backResult;
        });
        prev = prev.concat(backArr);
        return prev;
      }, []);
      dpArr[result] = dpArr[result].concat(currArr);
      dpArr[result].forEach(v => v.sort());
      const clearRepeat = dpArr[result].reduce((prev, curr) => {
        prev[curr.join(',')] = true;
        return prev;
      }, {});
      dpArr[result] = Object.keys(clearRepeat).map(v => 
        v.split(',').map(v => parseInt(v))
      );
      if (dpArr[result].length === 0) {
        break;
      } else {
        result++;
      }
    }
    print(result);
  }
}

module.exports = () => {
  outputFn();
  debugger
}