/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
  const res = [];

  const helper = (arr, depth) => {
    for (let val of arr) {
      if (typeof val === 'object' && depth < n) {
        helper(val, depth + 1);
      } else {
        res.push(val);
      }
    }
  };

  helper(arr, 0);
  return res;
};
