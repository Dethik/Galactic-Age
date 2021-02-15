import Planet from '../src/js/agecalc.js';

describe('Planet', () => {
  test('It should make a working constructor.', () => {
    let mercury = new Planet()
    expect(mercury).toEqual(mercury)
  })
})

describe('mercAge', () => {

  test('It should build the constructor and run all previous math in a condensed form.', () => {
    let mercury = new Planet(26)
    mercury.mercuryTime()
    expect(mercury).toEqual({"age": 6, "excessAge": 0, "lifeExp": 17, "lifeLeft": "You have 11 years left to live!", "time": 0.24})
  })

  test('test outliving life expectation', () => {
    let mercury = new Planet(80)
    mercury.mercuryTime()
    expect(mercury).toEqual({"age": 19, "excessAge": "You've outlived expectations by 2 years!", "lifeExp": 17, "lifeLeft": 0, "time": 0.24})
  })
})

describe('VenusAge', () => {

  test('It should build the constructor and run all previous math in a condensed form.', () => {
    let venus = new Planet(26)
    venus.venusTime()
    expect(venus).toEqual({"age": 16, "excessAge": 0, "lifeExp": 44, "lifeLeft": "You have 28 years left to live!", "time": 0.62})
  })

  test('test outliving life expectation', () => {
    let venus = new Planet(80)
    venus.venusTime()
    expect(venus).toEqual({"age": 49, "excessAge": "You've outlived expectations by 5 years!", "lifeExp": 44, "lifeLeft": 0, "time": 0.62})
  })
})

describe('MarsAge', () => {

  test('It should build the constructor and run all previous math in a condensed form.', () => {
    let mars = new Planet(26)
    mars.marsTime()
    expect(mars).toEqual({"age": 48, "excessAge": 0, "lifeExp": 135, "lifeLeft": "You have 87 years left to live!", "time": 1.88})
  })

  test('test outliving life expectation', () => {
    let mars = new Planet(80)
    mars.marsTime()
    expect(mars).toEqual({"age": 150, "excessAge": "You've outlived expectations by 15 years!", "lifeExp": 135, "lifeLeft": 0, "time": 1.88})
  })
})

describe('JupiterAge', () => {

  test('It should build the constructor and run all previous math in a condensed form.', () => {
    let jupiter = new Planet(26)
    jupiter.jupiterTime()
    expect(jupiter).toEqual({"age": 308, "excessAge": 0, "lifeExp": 853, "lifeLeft": "You have 545 years left to live!", "time": 11.86})
  })

  test('test outliving life expectation', () => {
    let jupiter = new Planet(80)
    jupiter.jupiterTime()
    expect(jupiter).toEqual({"age": 948, "excessAge": "You've outlived expectations by 95 years!", "lifeExp": 853, "lifeLeft": 0, "time": 11.86})
  })
});