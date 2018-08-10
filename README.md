# exerciseFactory
Don't you think it is difficult and troublesome to debug in online platform, especially in [nowcoder](https://www.nowcoder.com/1470833) and [acmcoder](http://www.acmcoder.com/index). 
This is a platform to debug and document questions in local environment.

### How to use it
1. copy and rename any directory in `niuke`.(For example, the name of new directory is `13`)
2. modify `config` field in the [main.js](https://github.com/sumAlbert/exerciseFactory/blob/master/main.js) under root directory
```
const kinds = ['niuke', 'normal', 'leetcode'];
const config = {
  kindNum: 0,
  questionNum: 13,// input new directory name
}
```
3. input the data in the `niuke/13/data.js`
4. input the code and finish the `outputFn` in the `niuke/13/answer.js`
```
//read_line() 赛码网
//readline() 牛客网
// 有些函数在tool里面，需要取出来
const { read_line, readline, print } = require('../../lib/platform');
const tool = require('../../lib/tool');
const outputFn = () => {
  // code
}

module.exports = () => {
  outputFn();
  debugger
}
```
5. input the question in the `niuke/13/question.txt`(optional)
6. run debug in vscode

