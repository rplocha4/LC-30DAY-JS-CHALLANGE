/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function (arr, size) {
  if (arr.length === 0) return [];
  const subArrays = arr.length <= size ? 1 : Math.ceil(arr.length / size);
  const res = [];
  for (let i = 0; i < subArrays; i++) {
    res.push([]);
  }
  arr.forEach((el, i) => {
    res[Math.floor(i / size)].push(el);
  });
  return res;
};
