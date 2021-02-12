import Planet from './js/agecalc.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';

$(document).ready(function() {
  $("#ageBtn").click(function() {
    let age = $("#age").val();
    let person = new Planet(age);
    let person1 = new Planet(age);
    let person2 = new Planet(age);
    let person3 = new Planet(age);
    person.mercuryTime();
    person1.venusTime();
    person2.marsTime();
    person3.jupiterTime();
    $("#outputMercury").text(`The time scales ` + person.time + ` compared to Earth. If your age is ` + person.age + ` then your life expectancy is ` + person.lifeExp + ` you are at ` + person.lifeLeft + ` and currently ` + person.excessAge + ` years past this age!`);
    $("#outputVenus").text(`The time scales ` + person1.time + ` compared to Earth. If your age is ` + person1.age + ` then your life expectancy is ` + person1.lifeExp + ` you are at ` + person1.lifeLeft + ` and currently ` + person1.excessAge + ` years past this age!`);
    $("#outputMars").text(`The time scales ` + person2.time + ` compared to Earth. If your age is ` + person2.age + ` then your life expectancy is ` + person2.lifeExp + ` you are at ` + person2.lifeLeft + ` and currently ` + person2.excessAge + ` years past this age!`);
    $("#outputJupiter").text(`The time scales ` + person3.time + ` compared to Earth. If your age is ` + person3.age + ` then your life expectancy is ` + person3.lifeExp + ` you are at ` + person3.lifeLeft + ` and currently ` + person3.excessAge + ` years past this age!`);
  });
});