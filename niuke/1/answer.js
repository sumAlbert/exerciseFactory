//read_line() 赛码网
//readline() 牛客网
const { read_line, readline, print } = require('../../lib/platform');
const outputFn = () => {
  // code
  const bigNumPlus = (plusNum1, plusNum2) => {
    const plusArr1 = `${plusNum1}`.split('').reverse();
    const plusArr2 = `${plusNum2}`.split('').reverse();

    let advanceChar = 0, maxSize = 0;
    const plusMidMap = plusArr2.map((char2, index2) => {
      advanceChar = 0;
      const zerosArr = [...new Array(index2).keys()].map(() => 0);
      let plusMidArr = plusArr1.map((char1) => {
        let singlePlusResult = parseInt(char1) * parseInt(char2) + advanceChar;
        advanceChar = Math.floor(singlePlusResult / 10);
        return parseInt(singlePlusResult % 10);
      })
      if (advanceChar) plusMidArr.push(advanceChar);
      plusMidArr = zerosArr.concat(plusMidArr);
      maxSize = Math.max(plusMidArr.length, maxSize);
      return plusMidArr;
    })

    let currSum, i = 0, resultArr = [];
    advanceChar = 0;
    do{
      let addMidVal = plusMidMap.reduce((prev, curr) => {
        return prev + parseInt(curr[i] || 0);
      }, advanceChar);
      i++;
      advanceChar = Math.floor(addMidVal / 10);
      currSum = parseInt(addMidVal % 10);
      resultArr.push(currSum);
    } while(i <= maxSize);
    const tempResult = resultArr.reverse();
    while(tempResult[0] === 0) {
      tempResult.shift();
    }
    if(tempResult.length === 0) return 0;
    return tempResult.join('');
  }

  const bigNumComp = (cmpNum1, cmpNum2) => {
    const cmpArr1 = `${cmpNum1}`.split('');
    const cmpArr2 = `${cmpNum2}`.split('');
    const lenResult = cmpArr1.length - cmpArr2.length;
    if (lenResult !== 0) return lenResult;
    for(let i = 0; i < cmpArr1.length; i++) {
      let charResult = cmpArr1[i] - cmpArr2[i];
      if (charResult) return charResult;
    }
    return 0;
  }
}

module.exports = () => {
  outputFn();
  debugger
}