//read_line() 赛码网
//readline() 牛客网
// 有些函数在tool里面，需要取出来
const { read_line, readline, print } = require('../../lib/platform');
const tool = require('../../lib/tool');
const outputFn = () => {
  // code
  const rotate = ([[a, b], [x, y]], count) => {
    let result = [];
    if(count === 0) {
      return [a, b];
    } else if(count === 1) {
      return [x + y - b, y + a - x];
    } else if(count === 2) {
      return [x + x - a, y + y - b];
    } else if(count === 3) {
      return [x + b - y, y + x - a];
    }
  }
  // param: 
  const isSquare = ([[x1, y1], [x2, y2], [x3, y3], [x4, y4]]) => {
    const distArr = [];
    distArr.push(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    distArr.push(Math.pow(x1 - x3, 2) + Math.pow(y1 - y3, 2));
    distArr.push(Math.pow(x1 - x4, 2) + Math.pow(y1 - y4, 2));
    distArr.push(Math.pow(x2 - x3, 2) + Math.pow(y2 - y3, 2));
    distArr.push(Math.pow(x2 - x4, 2) + Math.pow(y2 - y4, 2));
    distArr.push(Math.pow(x3 - x4, 2) + Math.pow(y3 - y4, 2));

    const dictMap = distArr.reduce((prev, curr) => {
      prev[curr] = prev[curr] ? prev[curr] + 1 : 1;
      return prev;
    }, {})

    const dictMapKeys = Object.keys(dictMap);
    if(dictMapKeys.length !== 2) {
      return false;
    }
    if(dictMap[dictMapKeys[0]] !== 4 || dictMap[dictMapKeys[0]] !== 2) {
      return false;
    }
    const bigSideValue = dictMap[dictMapKeys[0]] === 4 ? dictMap[dictMapKeys[1]] : dictMap[dictMapKeys[0]];
    const smallSideValue = dictMap[dictMapKeys[0]] === 4 ? dictMap[dictMapKeys[0]] : dictMap[dictMapKeys[1]];
    if(smallSideValue * 2 !== bigSideValue) {
      return false;
    }
    return true;
  }

  let currentLine = null;
  while(currentLine = readline()) {
    const n = parseInt(currentLine);
    const results = [];
    let i, j;
    for(i = 0; i < n; i++) {
      let result = -1;
      const inputsArr = [];
      for(j = 0; j < 4; j++) {
        const inputArr = readline().split(' ');
        inputArr.length = 4;
        inputsArr[j] = inputArr.map(v => parseInt(v));
      }
      const originArr = [0, 0, 0, 0];
      originArr.step = 0;
      let BFSQue = [originArr];
      while(BFSQue.length !== 0) {
        // 获取后续队列
        const currQue = BFSQue.shift();
        const currStep = currQue.step;
        const nextQues = currQue.reduce((prev, curr, idx) => {
          const cpCurrQue = [].concat(currQue);
          cpCurrQue.step = currStep + 1;
          if(curr < 3) {
            cpCurrQue[idx] = curr + 1;
            prev.push(cpCurrQue);
          }
          return prev;
        }, []);
        BFSQue = BFSQue.concat(nextQues);

        // 处理当前队列
        const currPoints = currQue.reduce((prev, curr, idx) => {
          const [a, b, x, y]= inputsArr[idx];
          rotate([[a, b], [x, y]], currStep);
          prev.push(rotate);
          return prev;
        }, []);

        if(isSquare(currPoints)) {
          result = currStep;
          break;
        }
      }
      results.push(result);
    }
    for(i = 0; i < n; i++) {
      print(results[i]);
    }
  }
}

module.exports = () => {
  outputFn();
  debugger
}