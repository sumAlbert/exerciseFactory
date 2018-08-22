//read_line() 赛码网
//readline() 牛客网
const { read_line, readline, print } = require('../../lib/platform');
const outputFn = () => {
  // code
  let currentLine = null;
  while (currentLine = readline()) {
    const sourceArr = currentLine.split('');
    const targetArr = readline().split('');

    if (targetArr && targetArr.length === 0 || sourceArr && sourceArr.length === 0) {
      print('No'); continue;
    }
    const dictMap = sourceArr.reduce((prev, curr, index) => {
      if (!prev[curr]) {
        prev[curr] = [index];
      } else {
        prev[curr].push(index);
      }
      return prev;
    }, {});

    const resultQueue = (dictMap[targetArr[0]] || []).map((val) => ([val]));
    if (resultQueue.length !== 0 && targetArr.length === 1) {
      print('Yes');
      continue;
    }
    let findFlag = false;
    while ((resultQueue || []).length !== 0) {
      const currArr = resultQueue.shift();
      const index = currArr.length;
      const waitChar = targetArr[index];
      if (!waitChar) continue;
      const currWaitAddQue = dictMap[waitChar];
      const cmpNum = currArr[currArr.length - 1]; 
      (currWaitAddQue || []).forEach((val) => {
        if (parseInt(val) > parseInt(cmpNum)) {
          const waitPushArr = currArr.concat([val]);
          resultQueue.push(waitPushArr);
          findFlag = findFlag || waitPushArr.length === targetArr.length
        }
      });
    }
    if (findFlag) {
      print('Yes');
    } else {
      print('No');
    }
  }
}

module.exports = () => {
  outputFn();
  debugger
}