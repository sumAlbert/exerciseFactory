//read_line() 赛码网
//readline() 牛客网
const { read_line, readline, print } = require('../../lib/platform');
const { smallCharacter } = require('../../lib/tool');
const outputFn = () => {
  // code
  const MAXSIZE = 1000;
  let currentLine = null;
  while (currentLine = readline()) {
    let n = parseInt(currentLine);
    const pointMap = [];
    while (n) {
      const [a1, b1] = readline().split(' ').map(v => parseInt(v));
      const row = pointMap[a1] || [];
      row[b1] = true;
      pointMap[a1] = row;
      n--;
    }
    const saveMap= []; 
    for(let i = 1; i <= MAXSIZE; i++) {
      const newArr = [];
      saveMap[i] = newArr;
      for(let j = 1; j <= MAXSIZE; j++) {
        const upperVal = (saveMap[i - 1] || [])[j] || 0;
        const leftVal = saveMap[i][j - 1] || 0;
        const leftUpperVal = (saveMap[i - 1]|| [])[j - 1] || 0;
        newArr[j] = upperVal + leftVal - leftUpperVal + ((pointMap[i] || [])[j]? 1 : 0);
      }
    }
    let m = readline();
    const result = [];
    while(m) {
      const [a1, b1, a2, b2] = readline().split(' ').map(v => parseInt(v));
      const upperVal = (saveMap[a1 - 1] || [])[b2] || 0;
      const leftVal = saveMap[a2][b1 - 1] || 0;
      const leftUpperVal = (saveMap[a1 - 1]||[])[b1 - 1] || 0;
      const currVal = saveMap[a2][b2] || 0;
      result.push(currVal - leftVal - upperVal + leftUpperVal);
      m--;
    }
    result.forEach(v => print(v));
  }
}

module.exports = () => {
  outputFn();
  debugger
}