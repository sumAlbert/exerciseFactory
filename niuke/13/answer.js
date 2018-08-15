//read_line() 赛码网
//readline() 牛客网
// 有些函数在tool里面，需要取出来
const { read_line, readline, print } = require('../../lib/platform');
const tool = require('../../lib/tool');
const outputFn = () => {
  // code
  let currentLine = null;
  const resultType = [
    'Likes',
    'Dislikes'
  ]
  while (currentLine = readline()) {
    const upperStr = currentLine.toUpperCase();
    if (upperStr !== currentLine) {
      print(resultType[1]);
      continue;
    }

    const upperArr = upperStr.split('');
    const sameCharResult = upperArr.reduce((prev, curr) => {
      if (prev.last === curr) {
        prev.result = true;
      }
      prev.last = curr;
      return prev;
    }, {
        last: undefined,
        result: false
      });
    if (sameCharResult.result) {
      print(resultType[1]);
      continue;
    }

    const xyxyHelper = upperArr.reduce((prev, curr, idx) => {
      const lastIdx = prev.helperMap[curr];
      if (lastIdx !== undefined) {
        prev.nextArr[lastIdx] = idx;
      }
      prev.helperMap[curr] = idx;
      const chatArr = prev.nextMap[curr] || [];
      chatArr.unshift(idx);
      prev.nextMap[curr] = chatArr;
      return prev;
    }, {
        nextArr: [],
        nextMap: {},
        helperMap: {}
      })

    const nextArr = xyxyHelper.nextArr;
    const nextMap = xyxyHelper.nextMap;
    let i = 0;
    let result = 0;
    while (i < nextArr.length) {
      const nextIdx = nextArr[i];
      if (nextIdx !== undefined) {
        let j = i + 1;
        while (j < nextArr.length && j < nextIdx) {
          const jChar = upperArr[j];
          const nextChars = nextMap[jChar];
          result = nextChars.some(v => v > nextIdx) ? 1 : 0;
          if (result === 1) {
            break;
          }
          j++;
        }
      }
      if(result === 1) {
        break;
      }
      i++;
    }
    print(resultType[result]);
  }
}

module.exports = () => {
  outputFn();
  debugger
}