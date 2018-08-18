const { smallCharacter } = require('../../lib/tool');

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  if(s.length === 0) {
    return 0;
  }
  const sArr = s.split('');
  const init = sArr.reduce((prev, curr, idx) => {
    const dp = prev.dp;
    const stack = prev.stack;
    if(curr === '(') {
      dp.push(0);
      stack.push(idx);
    } else if(curr === ')' && stack.length !== 0) {
      const lastIdx = stack.pop();
      const diff = idx - lastIdx + 1;
      const lastVal = dp[lastIdx - 1] || 0;
      dp.push(lastVal + diff);
    } else {
      dp.push(0);
    }
    return prev;
  }, {
    dp: [],
    stack: []
  });
  const result = init.dp.reduce((prev, curr) => {
    return Math.max(prev, curr);
  }, 0);
  return result;
};



// 输出模块
const outputFn = longestValidParentheses; // 记得修改这个！！！！
module.exports = (data) => {
  console.log('运行前输入的参数', data);
  const result = outputFn.apply(this, data);
  console.log('返回值', result);
  console.log('运行后输入的参数', data);
  debugger
  return result;
}
