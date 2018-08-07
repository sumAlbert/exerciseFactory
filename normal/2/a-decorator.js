const aDecorator = (A) => {
  class NewA {}
  A.data = '在修饰器中定义'
  return NewA;
}

module.exports = aDecorator;
