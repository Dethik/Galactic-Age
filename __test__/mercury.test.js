const { TestScheduler } = require("jest")

describe('mercAge', () => {

  test('Intake age from user and give them age if they were a Mercurite', () => {
    let age = 20;
    let mercTime = .24;
    let mercAge = age *= mercTime;
    expect(mercAge).toEqual(4.8)
  })

  test('Intake age, if over 72 years return number of excess', () => {
    let age = 400;
    let mercTime = .24;
    let mercAge = age *= mercTime;
    let excessAge = 0
    if (mercAge > 72) {
      excessAge = mercAge - 72
    }
    expect(excessAge).toEqual(24)
  })
})