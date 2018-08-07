const aDecorator = require('./a-decorator');

@aDecorator
class A {}

A.data = '在原始位置定义';

module.exports = A;


