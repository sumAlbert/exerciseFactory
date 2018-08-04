// 数组第一位为数字二进制最后一位
const bitArr = (num) => {
  result = [...new Array(32).keys()].map(() => 0);
  num = parseInt(num);
  let i = 0;
  while(num > 0) {
    const midRemainder = num % 2;
    num = parseInt(num / 2);
    result[i] = midRemainder;
    i++;
  }
  return result;
};

module.exports = {
  bitArr
}