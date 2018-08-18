const { smallCharacter } = require('../../lib/tool');

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const resultGrid = obstacleGrid.reduce((prev, row, rowIdx) => {
    const newRow = []; 
    prev.push(newRow);
    row.reduce((midPrev, col, colIdx) => {
      if (colIdx === 0 && rowIdx === 0) {
        midPrev.push(col === 1 ? 0 : 1);
        return midPrev;
      }
      if (col === 1) {
        midPrev.push(0);
        return midPrev;
      }
      const upperVal = (prev[rowIdx - 1] || [])[colIdx];
      const leftVal = (prev[rowIdx] || [])[colIdx - 1];
      const oldVals = [upperVal, leftVal];
      const currVal = oldVals.reduce((innPrev, innCurr) => {
        if(innCurr !== undefined) {
          innPrev += innCurr;
        }
        return innPrev;
      }, 0);
      midPrev.push(currVal);
      return midPrev;
    }, newRow);
    return prev;
  }, [])
  let flag = 0;
  const lastRow = resultGrid[resultGrid.length - 1] || [];
  if(resultGrid.length === 1) {
    flag++;
  }
  if(lastRow.length === 1) {
    flag++;
  }
  if(flag === 2) {
    const onlyEl = obstacleGrid[0][0];
    return onlyEl === 1 ? 0 : 1;
  }
  const lastCol = lastRow[lastRow.length - 1] || 0;
  return lastCol
};



// 输出模块
const outputFn = uniquePathsWithObstacles; // 记得修改这个！！！！
module.exports = (data) => {
  console.log('运行前输入的参数', data);
  const result = outputFn.apply(this, data);
  console.log('返回值', result);
  console.log('运行后输入的参数', data);
  debugger
  return result;
}
