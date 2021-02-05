// Average Life expectancy ~ 72 yrs for world

// import { mercuryTime, venusTime, jupiterTime, marsTime } from "/js/agecalc.js"

$(document).ready(function(event) {
  event.preventDefault();
  let age = 26;
  mercuryTime(age);
  venusTime(age);
  jupiterTime(age);
  marsTime(age);
  console.log(age)
  console.log(mercuryTime())
  console.log(venusTime())
  console.log(jupiterTime())
  console.log(marsTime())
});