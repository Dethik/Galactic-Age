describe('MarsAge', () => {

  test('Intake age from user and give them age if they were a Martian', () => {
    let age = 20;
    let marsTime = 1.88;
    let marsAge = parseInt(age *= marsTime);
    expect(marsAge).toEqual(37)
  })
})