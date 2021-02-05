describe('JupiterAge', () => {

  test('Intake age from user and give them age if they were a Jupitonian', () => {
    let age = 20;
    let jupiterTime = 11.86;
    let jupiterAge = parseInt(age *= jupiterTime);
    expect(jupiterAge).toEqual(237)
  })
  test('Intake age, if over 72 years return number of excess', () => {
    let age = 20;
    let jupiterTime = 11.86;
    let jupiterAge = parseInt(age *= jupiterTime);
    let excessJupiterAge = 0
    if (jupiterAge > 72) {
      excessJupiterAge = jupiterAge - 72
    }
    expect(excessJupiterAge).toEqual(165)
  })
})