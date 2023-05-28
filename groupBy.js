/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function (fn) {
  const res = this.reduce((acc, curr) => {
    const key = fn(curr);
    key in acc ? acc[key].push(curr) : (acc[key] = [curr]);
    return acc;
  }, {});
  return res;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
