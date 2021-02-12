import Planet from '../src/js/agecalc.js';

describe('MarsAge', () => {

  test('Intake age from user and give them age if they were a Martian', () => {
    let age = 20;
    let marsTime = 1.88;
    let marsAge = parseInt(age *= marsTime);
    expect(marsAge).toEqual(37)
  })

  test('Intake age, if over 72 years return number of excess', () => {
    let age = 50;
    let marsTime = 1.88;
    let marsAge = parseInt(age *= marsTime);
    let excessMarsAge = 0
    if (marsAge > 72) {
      excessMarsAge = marsAge - 72
    }
    expect(excessMarsAge).toEqual(22)
  })

  test('Calculate how long someone has left to live on a planet based off their age', () => {
    let age = 20;
    let marsTime = 1.88;
    let marsAge = parseInt(age *= marsTime);
    let marsLifeExp = parseInt(72 * 1.88)
    let marsLifeLeft = parseInt(marsLifeExp - marsAge)
    expect(marsLifeLeft).toEqual(98)
  })

  test('It should build the constructor and run all previous math in a condensed form.', () => {
    let mars = new Planet(26)
    mars.marsTime()
    expect(mars).toEqual({"age": 48, "excessAge": 0, "lifeExp": 135, "lifeLeft": 87, "time": 1.88})
  })

  test('test outliving life expectation', () => {
    let mars = new Planet(80)
    mars.marsTime()
    expect(mars).toEqual({"age": 150, "excessAge": 15, "lifeExp": 135, "lifeLeft": "'You've outlived expectations, keep it up!'", "time": 1.88})
  })
})