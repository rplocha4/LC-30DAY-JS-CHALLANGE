/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    // let res = x
    // for(const fn of functions.reverse()){
    //     res = fn(res)
    // }
    // return res
    return functions.reduceRight((n, fn) => {
      return fn(n);
    }, x);
  };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
