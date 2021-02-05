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
    expect(excessMarsAge).toEqual()
  })
})