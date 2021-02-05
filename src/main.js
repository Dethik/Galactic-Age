import Planet from "/js/agecalc.js"

$(document).ready(function(event) {
  event.preventDefault();
  let creature = new Planet(26)
  console.log(creature)
});