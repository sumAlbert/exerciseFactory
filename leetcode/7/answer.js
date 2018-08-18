const { smallCharacter } = require('../../lib/tool');

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  let DFSStack = [];
  let DFSMap = {};
  const DFSHelper = [];
  const write2DFSHelper = (row, column, val) => {
    const currRow = DFSHelper[row] || [];
    currRow[column] = val;
    DFSHelper[row] = currRow;
  };
  const recursive = () => {
    const currPoint = DFSStack[DFSStack.length - 1];
    const [currI, currJ] = currPoint;
    const currVal = matrix[currI][currJ];
    const nextDirc = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    let nextNum = 0;
    let cbValMax = 0;
    nextDirc.forEach(dirc => {
      const nextI = currI + dirc[0];
      const nextJ = currJ + dirc[1];
      const nextEl = (matrix[nextI] || [])[nextJ];
      if (nextEl !== undefined && nextEl > currVal && !DFSMap[`${nextI},${nextJ}`]) {
        nextNum++;
        DFSStack.push([nextI, nextJ]);
        DFSMap[`${nextI},${nextJ}`] = true;
        const DFSHelperVal = (DFSHelper[nextI] || [])[nextJ];
        if (DFSHelperVal === undefined) {
          const cbVal = recursive();
          cbValMax = Math.max(cbVal + 1, cbValMax);
        } else {
          cbValMax = Math.max(parseInt(DFSHelperVal) + 1, cbValMax);
        }
        DFSStack.pop();
        DFSMap[`${nextI},${nextJ}`] = false;
      }
    });
    if (nextNum === 0) {
      write2DFSHelper(currI, currJ, 1);
      return 1;
    }
    write2DFSHelper(currI, currJ, cbValMax);
    return cbValMax;
  }

  matrix.forEach((row, rowIdx) => {
    row.forEach((column, columnIdx) => {
      const DFSHelperVal = (DFSHelper[rowIdx] || [])[columnIdx];
      if (DFSHelperVal === undefined) {
        DFSMap = {};
        DFSStack = [[rowIdx, columnIdx]];
        DFSMap[`${rowIdx},${columnIdx}`] = true;
        recursive();
      }
    })
  })

  const result = DFSHelper.reduce((prev, curr) => {
    prev = curr.reduce((midPrev, midCurr) => {
      midPrev = Math.max(midPrev, midCurr);
      return midPrev;
    }, prev);
    return prev;
  }, 0);
  return result;
};



// 输出模块
const outputFn = longestIncreasingPath; // 记得修改这个！！！！
module.exports = (data) => {
  console.log('运行前输入的参数', data);
  const result = outputFn.apply(this, data);
  console.log('返回值', result);
  console.log('运行后输入的参数', data);
  debugger
  return result;
}
