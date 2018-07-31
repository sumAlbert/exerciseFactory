module.exports = () => {
  const ms = (ms, fn) => {
    setTimeout(() => {
      fn();
    }, ms)
  }
  const async1 = async () => {
    try {
      const val = await new Promise((resolve, reject) => {
        ms(3000, resolve.bind(this, 1));
      });
      console.log(1111, val);
    } catch (e) {
      console.log(2222, err);
    }
  }
  const async2 = async () => {
    try {
      const val = await new Promise((resolve, reject) => {
        ms(2000, resolve.bind(this, 2));
      });
      console.log(3333, val)
    } catch (e) {
      console.log(4444, err);
    }
  }
  const async3 = async () => {
    try {
      const val = await new Promise((resolve, reject) => {
        ms(1000, resolve.bind(this, 3));
      });
      console.log(5555, val)
    } catch (e) {
      console.log(6666, err);
    }

  }
  const mergeAsync = async (asyncArr) => {
    let i = 0;
    const run = async (i) => {
      if(asyncArr[i] instanceof Function) {
        try {
          await asyncArr[i]();
          run(i+1);
        } catch(e) {
          console.log(e);
        }
      }
    }
    run(0);
  }
  mergeAsync([async1, async2, async3]);
}