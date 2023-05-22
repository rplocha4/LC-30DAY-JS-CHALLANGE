/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function (object) {
  if (object === null) return 'null';
  if (typeof object === 'string') return `"${object}"`;
  if (Array.isArray(object)) {
    const arr = object.map((el) => jsonStringify(el));
    return `[${arr.join(',')}]`;
  }
  if (typeof object === 'object') {
    const obj = Object.keys(object).map(
      (key) => `"${key}":${jsonStringify(object[key])}`
    );
    return `{${obj.join(',')}}`;
  }
  return String(object);
};
