class EventEmitter {
  constructor() {
    this.events = {};
  }
  subscribe(event, cb) {
    this.events[event] = this.events[event] ?? [];
    this.events[event].push(cb);

    return {
      unsubscribe: () => {
        this.events[event] = this.events[event].filter((f) => f != cb);
      },
    };
  }

  emit(event, args = []) {
    if (event in this.events) {
      return this.events[event].map((f) => f(...args));
    }
    return [];
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
