//read_line() 赛码网
//readline() 牛客网
// 有些函数在tool里面，需要取出来
const { read_line, readline, print } = require('../../lib/platform');
const tool = require('../../lib/tool');
const outputFn = () => {
  // code
  const bitArr = (num) => {
    result = [...new Array(32).keys()].map(() => 0);
    num = parseInt(num);
    let i = 0;
    while (num > 0) {
      const midRemainder = num % 2;
      num = parseInt(num / 2);
      result[i] = midRemainder;
      i++;
    }
    return result;
  };

  let currentLine = null;
  while (currentLine = readline()) {
    const n = parseInt(currentLine);
    const xArr = readline().split(' ').map(v => parseInt(v));
    xArr.length = n;

    let bitMap = xArr.reduce((prev, curr) => {
      prev.push(bitArr(curr));
      return prev;
    }, []);

    bitMap.sort((a, b) => {
      const aValue = a.reduce((prev, curr) => {
        return prev * 2 + curr
      }, 0);
      const bValue = b.reduce((prev, curr) => {
        return prev * 2 + curr
      }, 0);
      return bValue - aValue;
    })
    let baseArrIndex = 0;
    [...new Array(32).keys()].forEach(v => {
      const baseArr = bitMap[baseArrIndex];
      const firstOneIndex = (baseArr || []).indexOf(1);
      if (baseArr && firstOneIndex !== -1 && firstOneIndex === v) {
        bitMap = bitMap.map((midV, midI) => {
          if (midI !== baseArrIndex && midV[firstOneIndex] === 1) {
            const midResult = midV.map((innerV, indexV) => {
              return innerV ^ baseArr[indexV];
            })
            return midResult;
          } else {
            return midV;
          }
        })
        baseArrIndex++;
      }
      bitMap.sort((a, b) => {
        const aValue = a.reduce((prev, curr) => {
          return prev * 2 + curr
        }, 0);
        const bValue = b.reduce((prev, curr) => {
          return prev * 2 + curr
        }, 0);
        return bValue - aValue;
      })
    });

    const result = bitMap.reduce((prev, curr) => {
      const oneNum = curr.filter((v) => (v === 1)).length;
      return oneNum === 0 ? prev : prev + 1;
    }, 0);
    print(result);
  }
}

module.exports = () => {
  outputFn();
  debugger
}