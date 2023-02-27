class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.minVal = min;
    this.maxVal = max;
  }

  guess() {
    const value = (this.minVal + this.maxVal) / 2;
    return Math.round(value);
  }

  lower() {
    this.maxVal = this.guess();
  }

  greater() {
    this.minVal = this.guess();
  }
}

module.exports = GuessingGame;
