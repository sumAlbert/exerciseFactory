//read_line() 赛码网
//readline() 牛客网
const { read_line, readline, print } = require('../../lib/platform');

module.exports = () => {
  // code
  let line;
  while(line = readline()) {
    print(line);
  }
}