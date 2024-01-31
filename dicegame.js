"use strict";

const Dice = require("./dice");

const diceA = new Dice();
const diceB = new Dice();

diceA.roll();
diceB.roll();

console.log(`Dice A: ${diceA}`);
console.log(`Dice B: ${diceB}`);

if (diceA.dots === diceB.dots) return console.log("It's a tie!");
diceA.dots > diceB.dots ? console.log("A wins!") : console.log("B wins!");
