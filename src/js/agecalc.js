let age = 26

function mercuryTime() {
  let mercTime = .24;
  let mercAge = parseInt(age *= mercTime);
  let excessMercAge = 0;
  let mercLifeExp = parseInt(72 * .24)
  let mercLifeLeft = parseInt(mercLifeExp - mercAge)
  if (mercAge > 72) {
    excessMercAge = mercAge - 72
  };
};

function venusTime() {
  let venusTime = .62;
  let venusAge = parseInt(age *= venusTime);
  let excessVenusAge = 0;
  let venusLifeExp = parseInt(72 * .62)
  let venusLifeLeft = parseInt(venusLifeExp - venusAge)
  if (venusAge > 72) {
    excessVenusAge = venusAge - 72
  };
};

function marsTime() {
  let marsTime = 1.88;
  let marsAge = parseInt(age *= marsTime);
  let excessMarsAge = 0
  let marsLifeExp = parseInt(72 * 1.88)
  let marsLifeLeft = parseInt(marsLifeExp - marsAge)
  if (marsAge > 72) {
    excessMarsAge = marsAge - 72
  }
}

function jupiterTime() {
  let jupiterTime = 11.86;
  let jupiterAge = parseInt(age *= jupiterTime);
  let excessJupiterAge = 0
  let jupiterLifeExp = parseInt(72 * 11.86)
  let jupiterLifeLeft = parseInt(jupiterLifeExp - jupiterAge)
  if (jupiterAge > 72) {
    excessJupiterAge = jupiterAge - 72
  }
}