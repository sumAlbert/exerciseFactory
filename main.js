const kinds = ['niuke', 'normal'];
const config = {
  kindNum: 1,
  questionNum: 1,
}
try {
  const app = require(`./${kinds[config.kindNum]}/${config.questionNum}/index`);
  const dataPath = `./${kinds[config.kindNum]}/${config.questionNum}/data.txt`;
  app(dataPath);
} catch(e) {
  console.log(e);
}