//read_line() 赛码网
//readline() 牛客网
const { read_line, readline, print } = require('../../lib/platform');
const { smallCharacter } = require('../../lib/tool');
const outputFn = () => {
  // code
  const smallCharacter = 'abcdefghijklmnopqrstuvwxyz';
  const dictArr = smallCharacter.split('').reverse();
  let currentLine = null;
  while (currentLine = readline()) {
    const targetArr = currentLine.split('');
    const dictList = targetArr.reduce((prev, curr, idx) => {
      const currList = prev[curr] || [];
      currList.push(idx);
      prev[curr] = currList;
      return prev;
    }, {});
    const orderList = dictArr.reduce((prev, curr) => {
      const currList = [].concat(dictList[curr] || []);
      currList.character = curr;
      prev.push(currList);
      return prev;
    }, []);
    const resultObj = orderList.reduce((prev, curr) => {
      const lastIdx = prev.lastIdx;
      const lastArr = prev.lastArr;
      const currChar = curr.character;
      curr.reduce((midPrev, midCurr) => {
        if(midCurr > lastIdx) {
          lastArr.push(currChar);
          prev.lastIdx = midCurr;
          return midCurr;
        }
        return midPrev;
      }, lastIdx);
      return prev;
    }, {
      lastIdx: -1,
      lastArr: []
    });
    const result = resultObj.lastArr.join('');
    print(result);
  }
}

module.exports = () => {
  outputFn();
  debugger
}