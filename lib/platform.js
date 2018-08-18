let dataMap = [];
let currentLine = 0;
let currentPoi = 0;
let outputMap = [];
const MAXNUM = 1024;


const save = (data, splitChar = '\n') => {
  dataMap = data.split(splitChar);
  currentLine = 0;
};

const readline = () => dataMap[currentLine++];// 牛客网

const read_line = () => {//赛码网
  let currentInput = dataMap[currentLine];
  let backLine = (currentInput || '').substr(currentPoi, MAXNUM);
  if ((currentInput || '').length >= currentPoi + MAXNUM) {
    currentPoi += MAXNUM;
  } else {
    currentPoi = 0;
    currentLine++;
  }
  return backLine;
};

const print = (data) => { outputMap.push(data) };

const printAll = () => {
  outputMap.forEach(v => console.log(`print: ${v}`));
};

const toCharacter = (param, splitSymbol = ' ') => {
  const rows = param.split('\n').filter(v => v.length !== 0);
  return rows.map(v => v.split(splitSymbol).filter(v => v.length && v.length !== 0));
}

module.exports = {
  save,
  read_line,
  readline,
  print,
  printAll,
  toCharacter
}