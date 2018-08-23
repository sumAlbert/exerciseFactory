//read_line() 赛码网
//readline() 牛客网
const { read_line, readline, print } = require('../../lib/platform');
const { smallCharacter } = require('../../lib/tool');
const outputFn = () => {
  // code
  const smallCharacter = 'abcdefghijklmnopqrstuvwxyz';
  const dictMap = smallCharacter.split('').reduce((prev, curr, idx) => {
    prev[curr] = idx;
    return prev;
  }, {});
  let currentLine = null;
  while(currentLine = readline()) {
    const sArr = currentLine.split('');
    const tArr = readline().split('');
    tArr.sort().reverse();
    let i = 0;
    const resultArr = sArr.map(v => {
      const cmpEl = tArr[i];
      const cmpOrder = dictMap[cmpEl] >= 0 ? dictMap[cmpEl] : -1;
      const orignOrder = dictMap[v];
      if(orignOrder < cmpOrder) {
        i++;
        return cmpEl;
      } else {
        return v;
      }
    });
    print(resultArr.join(''));
  }
}

module.exports = () => {
  outputFn();
  debugger
}