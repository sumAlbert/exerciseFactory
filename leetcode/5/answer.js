const { smallCharacter } = require('../../lib/tool');

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function (matrix) {
  const BFSque = [];
  const n = matrix.length;
  const m = (matrix[0] || []).length;
  const resultArr = matrix.map((vo, io) => {
    const midMap = vo.map((vi, ii) => {
      if (parseInt(vi) === 0) {
        const currEl = [io, ii];
        currEl.step = 0;
        BFSque.push(currEl);
        return 0;
      } else {
        return Infinity;
      }
    })
    return midMap;
  })
  while (BFSque.length !== 0) {
    const currEl = BFSque.shift();
    const currStep = currEl.step;
    const curri = parseInt(currEl[0]);
    const currj = parseInt(currEl[1]);
    const currVal = resultArr[curri][currj];
    const nextVals = [];
    const nextDiffs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    nextDiffs.forEach(v => {
      const diffI = v[0];
      const diffJ = v[1];
      let nextVal = ((resultArr[curri + diffI]) || [])[currj + diffJ];
      if(nextVal === Infinity) {
        const nextEl = [curri + diffI, currj + diffJ];
        nextEl.step = currStep + 1;
        BFSque.push(nextEl);
      } else if(nextVal === undefined) {
        nextVal = Infinity
      }
      nextVals.push(nextVal);
    })
    const min = nextVals.reduce((prev, curr) => {
      return Math.min(prev, curr);
    });
    if(currVal === Infinity) {
      resultArr[curri][currj] = min + 1;
    }
  }
  return resultArr;
};



// 输出模块
const outputFn = updateMatrix; // 记得修改这个！！！！
module.exports = (data) => {
  console.log('运行前输入的参数', data);
  const result = outputFn.apply(this, data);
  console.log('运行后输入的参数', data);
  debugger
  return result;
}
