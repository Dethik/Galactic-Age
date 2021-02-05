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
})