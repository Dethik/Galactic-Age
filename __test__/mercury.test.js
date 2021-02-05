const { TestScheduler } = require("jest")

describe('mercAge', () => {

  test('Intake age from user and give them age if they were a Mercurite', () => {
    let age = 20
    let mercTime = .24
    let mercAge = age *= mercTime
    expect(mercAge).toEqual(4.8)
  })
})