import Planet from '../src/js/agecalc.js';

describe('VenusAge', () => {

  test('Intake age from user and give them age if they were a Venusite', () => {
    let age = 20;
    let venusTime = .62;
    let venusAge = parseInt(age *= venusTime);
    expect(venusAge).toEqual(12)
  })

  test('Intake age, if over 72 years return number of excess', () => {
    let age = 250;
    let venusTime = .62;
    let venusAge = parseInt(age *= venusTime);
    let excessVenusAge = 0
    if (venusAge > 72) {
      excessVenusAge = venusAge - 72
    }
    expect(excessVenusAge).toEqual(83)
  })

  test('Calculate how long someone has left to live on a planet based off their age', () => {
    let age = 20;
    let venusTime = .62;
    let venusAge = parseInt(age *= venusTime);
    let venusLifeExp = parseInt(72 * .62)
    let venusLifeLeft = parseInt(venusLifeExp - venusAge)
    expect(venusLifeLeft).toEqual(32)
  })

  test('It should build the constructor', () => {
    function Planet() {
        this.time = 0;
        this.age = 0;
        this.lifeExp = 0;
        this.lifeLeft = 0;
        this.excessAge = 0;
      }
    let venus = new Planet()
    expect(venus).toEqual(venus)
  })

  test('It should build the constructor and run all previous math in a condensed form.', () => {
    let venus = new Planet(26)
    venus.venusTime()
    expect(venus).toEqual({"age": 16, "excessAge": 0, "lifeExp": 44, "lifeLeft": 28, "time": 0.62})
  })

  test('test outliving life expectation', () => {
    let venus = new Planet(80)
    venus.venusTime()
    expect(venus).toEqual({"age": 49, "excessAge": 5, "lifeExp": 44, "lifeLeft": `You've outlived expectations!`, "time": 0.62})
  })
})