export default class Debauncer {
  constructor(delayMs) {
    this.timerId = null;
    this.delayMs = delayMs;
  }

  exec(func, ...args) {
    clearTimeout(this.timerId);
    this.timerId = setTimeout(() => {
      func(args);
    }, this.delayMs);
  }
}
