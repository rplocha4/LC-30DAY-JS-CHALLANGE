var TimeLimitedCache = function () {
  this.data = {};
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  let res = false;

  if (!this.data[key]) {
    const timeout = setTimeout(() => {
      this.data[key].value = -1;
    }, duration);
    this.data[key] = { value, timeout };
    return false;
  }
  if (this.data[key].value !== -1) {
    res = true;
  }
  clearTimeout(this.data[key].timeout);
  const timeout = setTimeout(() => {
    this.data[key].value = -1;
  }, duration);
  this.data[key] = { value, timeout };
  return res;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  return this.data[key]?.value || -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  return Object.keys(this.data).filter((el) => {
    return this.data[el].value !== -1;
  }).length;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
