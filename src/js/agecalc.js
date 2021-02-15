export default class Planet {
  constructor(age) {
    this.time = 0;
    this.age = age;
    this.lifeExp = 0;
    this.lifeLeft = 0;
    this.excessAge = 0;
  }
  mercuryTime() {
    this.time = .24;
    this.age = parseInt(this.age *= this.time);
    this.lifeExp = parseInt(72 * .24);
    if (this.lifeExp > this.age) {
      let ageLeft = parseInt(this.lifeExp - this.age);
      this.lifeLeft = `You have ${ageLeft} years left to live!`;
      this.excessAge = ""
    } else {
      let ageExcess = this.age - this.lifeExp;
      this.lifeLeft = ""
      this.excessAge = `You've outlived expectations by ${ageExcess} years!`;
    }
  }
  venusTime() {
    this.time = .62;
    this.age = parseInt(this.age *= this.time);
    this.lifeExp = parseInt(72 * .62);
    if (this.lifeExp > this.age) {
      let ageLeft = parseInt(this.lifeExp - this.age);
      this.lifeLeft = `You have ${ageLeft} years left to live!`;
      this.excessAge = ""
    } else {
      let ageExcess = this.age - this.lifeExp;
      this.lifeLeft = ""
      this.excessAge = `You've outlived expectations by ${ageExcess} years!`;
    }
  }
  marsTime() {
    this.time = 1.88;
    this.age = parseInt(this.age *= this.time);
    this.lifeExp = parseInt(72 * 1.88);
    if (this.lifeExp > this.age) {
      let ageLeft = parseInt(this.lifeExp - this.age);
      this.lifeLeft = `You have ${ageLeft} years left to live!`;
      this.excessAge = ""
    } else {
      let ageExcess = this.age - this.lifeExp;
      this.lifeLeft = ""
      this.excessAge = `You've outlived expectations by ${ageExcess} years!`;
    }
  }
  jupiterTime() {
    this.time = 11.86;
    this.age = parseInt(this.age *= this.time);
    this.lifeExp = parseInt(72 * 11.86);
    if (this.lifeExp > this.age) {
      let ageLeft = parseInt(this.lifeExp - this.age);
      this.lifeLeft = `You have ${ageLeft} years left to live!`;
      this.excessAge = ""
    } else {
      let ageExcess = this.age - this.lifeExp;
      this.lifeLeft = ""
      this.excessAge = `You've outlived expectations by ${ageExcess} years!`;
    }
  }
}