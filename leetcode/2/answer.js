const { smallCharacter } = require('../../lib/tool');

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  const dpObj = nums.reduce((prev, curr) => {
    const dpMax = prev.dpMax;
    const dpMin = prev.dpMin;
    const lastMax = dpMax[dpMax.length - 1];
    const lastMin = dpMin[dpMin.length - 1];
    if (lastMax=== undefined || lastMin === undefined) {
      dpMax.push(curr);
      dpMin.push(curr);
    } else {
      const nextArr = [
        lastMax * curr,
        lastMin * curr,
        curr
      ]
      const nextMax = Math.max.apply(this, nextArr);
      const nextMin = Math.min.apply(this, nextArr);
      dpMax.push(nextMax);
      dpMin.push(nextMin);
    }
    return prev;
  }, {
    dpMax: [],
    dpMin: []
  });
  const dpMax = dpObj.dpMax.reduce((prev, curr) => {
    return Math.max(prev, curr);
  }, -Infinity);
  return dpMax;
};



// 输出模块
const outputFn = maxProduct; // 记得修改这个！！！！
module.exports = (data) => {
  console.log('运行前输入的参数', data);
  const result = outputFn.apply(this, data);
  console.log('返回值', result);
  console.log('运行后输入的参数', data);
  debugger
  return result;
}
