const kinds = ['niuke', 'normal', 'leetcode'];
const config = {
  kindNum: 0,
  questionNum: 14,
}
try {
  const app = require(`./${kinds[config.kindNum]}/${config.questionNum}/index`);
  app();
} catch(e) {
  console.log(e);
}