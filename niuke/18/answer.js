//read_line() 赛码网
//readline() 牛客网
// 有些函数在tool里面，需要取出来
const { read_line, readline, print } = require('../../lib/platform');
const tool = require('../../lib/tool');
const outputFn = () => {
  // code
  const rotateNum = (a, b, x, y, n) => {
    n = n % 4;
    if(n === 0) {
      return [a, b];
    } else if(n === 1) {
      return [x + y - b, y + a - x];
    } else if(n === 2) {
      return [x + x - a, y + y - b];
    } else {
      return [x + b - y, y + x - a];
    }
  }
  const isSquare = (points) => {
    const dists = [];
    points.forEach((ov, oi) => {
      points.forEach((iv, ii) => {
        if(ii > oi) {
          dists.push(dist(ov[0], ov[1], iv[0], iv[1]));
        }
      })
    })
    const distMap = dists.reduce((prev, curr) => {
      prev[curr] = true;
      return prev;
    }, {});
    const keys = Object.keys(distMap);
    return keys.length === 2 && keys.indexOf('0') === -1;
  }
  const dist = (x0, y0, x1, y1) => {
    return Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2);
  }
  let currentLine = null;
  while(currentLine = readline()) {
    let i, j;
    const n = parseInt(currentLine);
    const totalResults = [];
    for(i = 0; i < n; i++) {
      const fourPoints = [];
      for(j = 0; j < 4; j++) {
        const currPoint = readline().split(' ').map(v => parseInt(v));
        fourPoints.push(currPoint);
      }

      const seedEl = [0, 0, 0, 0];
      seedEl.step = 0;
      const BFSMap = {[seedEl.join()]: true};
      const BFSQue = [seedEl];
      let currResult = -1;
      while(BFSQue.length !== 0) {
        const currEl = BFSQue.shift();
        const currPoints = currEl.map((v, i) => {
          const originPoint = [].concat(fourPoints[i]);
          originPoint.push(v);
          const generatorPoint = rotateNum.apply(this, originPoint);
          return generatorPoint;
        })
        if(isSquare(currPoints)) {
          currResult = currEl.step;
          break;
        }
        for(j = 0; j < 4; j++) {
          const nextEl = [].concat(currEl);
          nextEl.step = currEl.step + 1;
          nextEl[j] += 1;
          const nextElKey = nextEl.join();
          if(nextEl[j] <= 3 && !BFSMap[nextElKey]) {
            BFSQue.push(nextEl);
            BFSMap[nextElKey] = true;
          }
        }
      }
      totalResults.push(currResult);
    }
    totalResults.forEach(v => {
      print(v);
    });
  }
}

module.exports = () => {
  outputFn();
  debugger
}