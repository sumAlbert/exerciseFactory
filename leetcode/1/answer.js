/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let resultMax = nums[0];
  nums.reduce((prev, curr) => {
    const maxNum = Math.max(prev + curr, curr);
    resultMax = Math.max(maxNum, resultMax);
    return maxNum;
  });
  return resultMax;
};




// 输出模块
const outputFn = maxSubArray;
module.exports = (data) => {
  const result = outputFn(data);
  debugger
  return result;
}
