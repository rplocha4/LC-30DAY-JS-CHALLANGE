/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function (fn, t) {
  let timeoutID;
  let timeToCall = 0;
  return function (...args) {
    const delay = Math.max(0, timeToCall - Date.now());
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      timeToCall = Date.now() + t;
      return fn(...args);
    }, delay);
  };
};

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */
