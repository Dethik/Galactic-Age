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

  test('Calculate how long someone has left to live on a planet based off their age', () => {
    let age = 20;
    let jupiterTime = 11.86;
    let jupiterAge = parseInt(age *= jupiterTime);
    let jupiterLifeExp = parseInt(72 * 11.86)
    let jupiterLifeLeft = parseInt(jupiterLifeExp - jupiterAge)
    expect(jupiterLifeLeft).toEqual(616)
  })

  test('It should build the constructor and run all previous math in a condensed form.', () => {
    function Planet(age, lifeExp, lifeLeft, excessAge) {
        this.time = 0;
        this.age = age;
        this.lifeExp = lifeExp;
        this.lifeLeft = lifeLeft;
        this.excessAge = excessAge;
      }
      Planet.prototype.jupiterTime = function() {
        this.time = 11.86;
        this.age = parseInt(this.age *= this.time);
        this.lifeExp = parseInt(72 * 11.86)
        this.lifeLeft = parseInt(this.lifeExp - this.age)
        if (this.age > this.lifeExp) {
          this.excessAge = this.age - this.lifeExp
        } else {
          this.excessAge = 0
        }
      };
    let jupiter = new Planet(26)
    jupiter.jupiterTime()
    expect(jupiter).toEqual({"age": 308, "excessAge": 0, "lifeExp": 853, "lifeLeft": 545, "time": 11.86})
  })
})