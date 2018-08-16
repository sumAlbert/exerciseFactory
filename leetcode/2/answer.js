const { smallCharacter } = require('../../lib/tool');

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  let result = 0;
  const smallCharacter = 'abcdefghijklmnopqrstuvwxyz';
  const smallArr = smallCharacter.split('');
  const beginEl = beginWord.split('');
  beginEl.step = 0;
  const wordHashMap = wordList.reduce((prev, curr) => {
    prev[curr] = true;
    return prev;
  }, {});
  const BFSOldQue = {};
  const BFSque = [beginEl]
  while (BFSque.length !== 0) {
    const currEl = BFSque.shift();
    const currStr = currEl.join('');
    const currStep = currEl.step;
    if (currStr === endWord) {
      result = currStep + 1;
      break;
    }
    if (BFSOldQue[currStr]) {
      continue;
    }
    BFSOldQue[currStr] = true;
    currEl.forEach((vo, io, ao) => {
      smallArr.forEach((vi) => {
        if (vo !== vi) {
          const newArr = [].concat(ao);
          newArr.step = currStep + 1;
          newArr[io] = vi;
          const newStr = newArr.join('');
          if (wordHashMap[newStr]) {
            BFSque.push(newArr);
          }
        }
      })
    })
  };
  return result;
};




// 输出模块
const outputFn = ladderLength; // 记得修改这个！！！！
module.exports = (data) => {
  console.log('运行前输入的参数', data);
  const result = outputFn.apply(this, data);
  console.log('运行后输入的参数', data);
  debugger
  return result;
}
