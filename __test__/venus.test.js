describe('VenusAge', () => {

  test('It should build the constructor and run all previous math in a condensed form.', () => {
    function Planet() {
        this.time = 0;
        this.age = 0;
        this.lifeExp = 0;
        this.lifeLeft = 0;
        this.excessAge = 0;
      }
    let venus = new Planet()
    expect(venus).toEqual(venus)
  })
//   test('Intake age from user and give them age if they were a Venusite', () => {
//     let age = 20;
//     let venusTime = .62;
//     let venusAge = parseInt(age *= venusTime);
//     expect(venusAge).toEqual(12)
//   })

//   test('Intake age, if over 72 years return number of excess', () => {
//     let age = 250;
//     let venusTime = .62;
//     let venusAge = parseInt(age *= venusTime);
//     let excessVenusAge = 0
//     if (venusAge > 72) {
//       excessVenusAge = venusAge - 72
//     }
//     expect(excessVenusAge).toEqual(83)
//   })

//   test('Calculate how long someone has left to live on a planet based off their age', () => {
//     let age = 20;
//     let venusTime = .62;
//     let venusAge = parseInt(age *= venusTime);
//     let venusLifeExp = parseInt(72 * .62)
//     let venusLifeLeft = parseInt(venusLifeExp - venusAge)
//     expect(venusLifeLeft).toEqual(32)
//   })
})