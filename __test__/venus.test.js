describe('VenusAge', () => {

  test('Intake age from user and give them age if they were a Venusite', () => {
    let age = 20;
    let venusTime = .62;
    let venusAge = age *= venusTime;
    expect(venusAge).toEqual(12.4)
  })
})