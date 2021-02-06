import Planet from './js/agecalc.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';

$(document).ready(function() {
  let person = new Planet(27);
  let person1 = new Planet(50);
  let person2 = new Planet(67);
  let person3 = new Planet(80);
  person.mercuryTime();
  person1.venusTime();
  person2.marsTime();
  person3.jupiterTime();
  console.log('The time scales ' + person.time + ' compared to Earth. If your age is ' + person.age + ' then your life expectancy is ' + person.lifeExp + ' you are at ' + person.lifeLeft + ' You are currently ' + person.excessAge + ' years past this age!');
  console.log('The time scales ' + person1.time + ' compared to Earth. If your age is ' + person1.age + ' then your life expectancy is ' + person1.lifeExp + ' you are at ' + person1.lifeLeft + ' You are currently ' + person1.excessAge + ' years past this age!');
  console.log('The time scales ' + person2.time + ' compared to Earth. If your age is ' + person2.age + ' then your life expectancy is ' + person2.lifeExp + ' you are at ' + person2.lifeLeft + ' You are currently ' + person2.excessAge + ' years past this age!');
  console.log('The time scales ' + person3.time + ' compared to Earth. If your age is ' + person3.age + ' then your life expectancy is ' + person3.lifeExp + ' you are at ' + person3.lifeLeft + ' You are currently ' + person3.excessAge + ' years past this age!');
});