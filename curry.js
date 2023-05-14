/**
 * @param {Function} fn
 * @return {Function}
 */
//method 1
var curry = function (fn) {
  const fnArgs = [];
  const fnArgsLen = fn.length;

  return function curried(...args) {
    for (const n of args) {
      fnArgs.push(n);
    }
    if (fnArgs.length === fnArgsLen) {
      return fn(...fnArgs);
    } else return curried;
  };
};

// method 2
var curry = function (fn) {
  const fn_args = fn.length;

  return function curried(...args) {
    if (args.length === fn_args) {
      return fn(...args);
    }
    return curried.bind(null, ...args);
  };
};

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */
