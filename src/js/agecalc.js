

export default class Planet {
  constructor(age) {
    this.time = 0;
    this.age = age;
    this.lifeExp = 0;
    this.lifeLeft = 0;
    this.excessAge = 0;
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
  if (this.age > this.lifeExp) {
    this.excessAge = this.age - this.lifeExp
  } else {
    this.excessAge = 0
  }
};

Planet.prototype.marsTime = function() {
  this.time = 1.88;
  this.age = parseInt(this.age *= this.time);
  this.lifeExp = parseInt(72 * 1.88)
  this.lifeLeft = parseInt(this.lifeExp - this.age)
  if (this.age > this.lifeExp) {
    this.excessAge = this.age - this.lifeExp
  } else {
    this.excessAge = 0
  }
};

Planet.prototype.jupiterTime = function() {
  this.time = 11.86;
  this.age = parseInt(this.age *= this.time);
  this.lifeExp = parseInt(72 * 11.86)
  this.lifeLeft = parseInt(this.lifeExp - this.age)
  if (this.age > this.lifeExp) {
    this.excessAge = this.age - this.lifeExp
  } else {
    this.excessAge = 0
  }
};
console.log(mercuryTime())
console.log(venusTime())
console.log(jupiterTime())
console.log(marsTime())