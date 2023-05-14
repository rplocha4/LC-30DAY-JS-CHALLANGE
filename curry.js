/**
 * @param {Function} fn
 * @return {Function}
 */
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

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */
