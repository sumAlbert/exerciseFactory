const fn1 = () => {
  var p = new Promise(function(resolve, reject) {
    resolve("ok");
    throw new Error('error0');
    //setTimeout(function() { throw new Error('error1') }, 0);
  });
  p.then(function(value){
    console.log(2222, value) 
  　})
  .catch(function(err){
    console.log(1111, err)
    });
  process.on('unhandledRejection', function (err, p) { console.error('catch exception:') });
}

const fn2 = () => {
  var p = new Promise(function(resolve, reject) {
    resolve("ok");
    //throw new Error('error0');
    setTimeout(function() { throw new Error('error1') }, 0);
  });
  p.then(function(value){
      console.log(1111, value) 
  　})
  .catch(function(err){
      console.log(2222, err)
    });
  process.on('unhandledRejection', function (err, p) { console.error('catch exception:') });
}

const fn3 = () => {
  var p = new Promise(function(resolve, reject) {
    resolve("ok");
    throw new Error('error0');
    setTimeout(function() { throw new Error('error1') }, 0);
  });
  p.then(function(value){
      console.log(value) 
  　})
  .catch(function(err){
      console.log(err)
      });
  process.on('unhandledRejection', function (err, p) { console.error('catch exception:',err.stack) });
}
fn1();