

export default class Planet {
  constructor() {
    this.time = 0
    this.age = 26
    this.lifeExp = 0
    this.lifeLeft = 0
    this.excessAge = 0
  }
}

Planet.prototype.mercTime = function() {
  let mercTime = .24;
  let mercAge = parseInt(this.age *= mercTime);
  let mercLifeExp = parseInt(72 * .24);
  let mercLifeLeft = parseInt(mercLifeExp - mercAge);
  if (mercAge > 72) {
    this.excessAge = mercAge - 72
  };
};

Planet.prototype.venusTime = function() {
  this.time = .62;
  this.age = parseInt(this.age *= this.time);
  this.lifeExp = parseInt(72 * .62)
  this.lifeLeft = parseInt(this.lifeExp - this.age)
  if (this.age > 72) {
    this.excessAge = this.age - 72
  };
};

Planet.prototype.marsTime = function() {
  let marsTime = 1.88;
  let marsAge = parseInt(age *= marsTime);
  let excessMarsAge = 0
  let marsLifeExp = parseInt(72 * 1.88)
  let marsLifeLeft = parseInt(marsLifeExp - marsAge)
  if (marsAge > 72) {
    excessMarsAge = marsAge - 72
  }
}

Planet.prototype.jupiterTime = function() {
  let jupiterTime = 11.86;
  let jupiterAge = parseInt(age *= jupiterTime);
  let excessJupiterAge = 0
  let jupiterLifeExp = parseInt(72 * 11.86)
  let jupiterLifeLeft = parseInt(jupiterLifeExp - jupiterAge)
  if (jupiterAge > 72) {
    excessJupiterAge = jupiterAge - 72
  }
}
console.log(mercuryTime())
console.log(venusTime())
console.log(jupiterTime())
console.log(marsTime())