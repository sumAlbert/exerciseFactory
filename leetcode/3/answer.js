/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const DFS = (i, j) => {
    const currPoint = (board[i] || [])[j];
    if (!currPoint) {
      return;
    }
    if (currPoint === 'O') {
      board[i][j] = 'R';
      DFS(i - 1, j);
      DFS(i + 1, j);
      DFS(i, j - 1);
      DFS(i, j + 1);
    }
  }
  const n = board.length;
  const m = (board[0] || []).length;
  board.forEach((row, rowIdx) => {
    row.forEach((column, columnIdx) => {
      if (column === 'O' && (rowIdx === n - 1 || rowIdx === 0 || columnIdx === m - 1 || columnIdx === 0)) {
        DFS(rowIdx, columnIdx);
      }
    })
  })

  board.forEach((row, rowIdx) => {
    row.forEach((column, columnIdx, columnArr) => {
      columnArr[columnIdx] = column === 'R' ? 'O' : 'X';
    })
  })
};




// 输出模块
const outputFn = solve;
module.exports = (data) => {
  const result = outputFn(data);
  console.log(data);
  debugger
  return result;
}
