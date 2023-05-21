/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  const initialVal = init;
  let curr_val = init;

  return {
    increment: () => ++curr_val,
    reset: () => {
      curr_val = initialVal;
      return curr_val;
    },
    decrement: () => --curr_val,
  };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
