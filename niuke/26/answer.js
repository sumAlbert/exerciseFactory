//read_line() 赛码网
//readline() 牛客网
const { read_line, readline, print } = require('../../lib/platform');
const { C } = require('../../lib/tool');

const readLine = function(){
  let line = "";
    var next = read_line();
    while(next.length>=1024){
      line += next;
        next =read_line();
    }
    line +=next;
    return line;
}

const outputFn = () => {
  // code
  let currentLine = null, i, j;
  while(currentLine = readline()) {
    const n = parseInt(currentLine);
    const performances = [];
    for(i = 0; i < n; i++) {
      const [startTime, duration]= readline().split(' ').map(v => parseInt(v));
      performances.push([startTime, duration, startTime + duration]);
    }
    performances.sort((a, b) => (a[2] < b[2] ? -1 : 1));
    const performancesObj = performances.reduce((prev, curr) => {
      const currStartTime = prev.nextStartTime;
      if(curr[0] >= currStartTime) {
        prev.resultNum += 1;
        prev.nextStartTime = curr[2];
      }
      return prev;
    }, {
      resultNum: 0,
      nextStartTime: 0
    });
    print(performancesObj.resultNum);
  }
}

module.exports = () => {
  outputFn();
  debugger
}