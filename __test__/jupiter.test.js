describe('JupiterAge', () => {

  test('Intake age from user and give them age if they were a Jupitonian', () => {
    let age = 20;
    let jupiterTime = 11.86;
    let jupiterAge = parseInt(age *= jupiterTime);
    expect(jupiterAge).toEqual(237)
  })
})