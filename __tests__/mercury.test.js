import Planet from '../src/js/agecalc.js';

describe('mercAge', () => {

  test('Intake age from user and give them age if they were a Mercurite', () => {
    let age = 20;
    let mercTime = .24;
    let mercAge = parseInt(age *= mercTime);
    expect(mercAge).toEqual(4)
  })

  test('Intake age, if over 72 years return number of excess', () => {
    let age = 400;
    let mercTime = .24;
    let mercAge = parseInt(age *= mercTime);
    let excessAge = 0
    if (mercAge > 72) {
      excessAge = mercAge - 72
    }
    expect(excessAge).toEqual(24)
  })

  test('Calculate expected life duration on planet', () => {
    let mercLifeExp = parseInt(72 * .24)
    expect(mercLifeExp).toEqual(17)
  })

  test('Calculate how long someone has left to live on a planet based off their age', () => {
    let age = 20;
    let mercTime = .24;
    let mercAge = parseInt(age *= mercTime);
    let mercLifeExp = parseInt(72 * .24)
    let mercLifeLeft = parseInt(mercLifeExp - mercAge)
    expect(mercLifeLeft).toEqual(13)
  })

  test('It should build the constructor and run all previous math in a condensed form.', () => {
    let mercury = new Planet(26)
    mercury.mercuryTime()
    expect(mercury).toEqual({"age": 6, "excessAge": 0, "lifeExp": 17, "lifeLeft": 11, "time": 0.24})
  })

  test('test outliving life expectation', () => {
    let mercury = new Planet(80)
    mercury.mercuryTime()
    expect(mercury).toEqual({"age": 19, "excessAge": 2, "lifeExp": 17, "lifeLeft": "'You've outlived expectations, keep it up!'", "time": 0.24})
  })
})