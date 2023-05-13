/**
 * @param {Function} fn
 */
function memoize(fn) {
  const fns = {};
  return function (...args) {
    if (args in fns) {
      return fns[args];
    } else {
      const val = fn(...args);
      fns[args] = val;
      return val;
    }
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
