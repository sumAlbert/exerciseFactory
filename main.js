const kinds = ['niuke', 'normal', 'leetcode'];
const config = {
  kindNum: 1,
  questionNum: 3,
}
try {
  const app = require(`./${kinds[config.kindNum]}/${config.questionNum}/index`);
  app();
} catch(e) {
  console.log(e);
}