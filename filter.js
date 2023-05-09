/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  const resArr = [];
  for (const i in arr) {
    fn(arr[i], +i) && resArr.push(arr[i]);
  }
  return resArr;
};
