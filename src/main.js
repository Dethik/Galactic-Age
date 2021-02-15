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
    $("#outputMercury").text(`The time scales ${person.time} compared to Earth. If your age is ${age} on earth, your age on Mercury would be ${person.age} then your life expectancy is ${person.lifeExp}, ${person.lifeLeft} ${person.excessAge}`);
    $("#outputVenus").text(`The time scales ${person1.time} compared to Earth. If your age is ${age} on earth, your age on Venus would be ${person1.age} then your life expectancy is ${person1.lifeExp}, ${person1.lifeLeft} ${person1.excessAge}`);
    $("#outputMars").text(`The time scales ${person2.time} compared to Earth. If your age is ${age} on earth, your age on Mars would be ${person2.age} then your life expectancy is ${person2.lifeExp}, ${person2.lifeLeft} ${person2.excessAge}`);
    $("#outputJupiter").text(`The time scales ${person3.time} compared to Earth. If your age is ${age} on earth, your age on Jupiter would be ${person3.age} then your life expectancy is ${person3.lifeExp}, ${person3.lifeLeft} ${person3.excessAge}`);
  });
});