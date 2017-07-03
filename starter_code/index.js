/*jshint esversion: 6*/
const Elevator = require('./elevator.js');
const Person = require('./person.js');


const person = new Person("fer", 3, 10);
const elevator = new Elevator();


elevator.start(person);
