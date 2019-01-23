var css = document.querySelector("h3");
var input1 = document.querySelector(".color1");
var input2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function generator() {
  body.style.background = "linear-gradient(to right, " + input1.value + ", " + input2.value + ")";
  css.textContent = body.style.background + ";";
}
input1.addEventListener("input", generator);
input2.addEventListener("input", generator);
//
//
//     practice from here
//
//
// function move(direction) {
//   var myMydirection;
//   switch (direction) {
//     case "forward":
//       myMydirection = "meet a dragon!!";
//       break;
//     case "backward":
//       myMydirection = "go home";
//       break;
//     case "left":
//       myMydirection = "see a river";
//       break;
//     case "right":
//       myMydirection = "match ended.Start again!";
//       break;
//   }
//   return myMydirection;
// }
// let name = "Sujoy";
// let age = 19;
// let car = "lambo";
// const meetSujoy = `Here is ${age} years old ${name} who has a ${car} in his house!!!`;
// console.log(meetSujoy);
//
// function meetSujoy(name = "Sujoy", age = 20, car = "lambo") {
//   return `Here is ${age} years old ${name} who has a ${car} in his house!!!`;
// }
// meetSujoy();
// let a = Symbol();
// let b = Symbol("abc");
// let c = Symbol("abc");
//
// function add(a, b) {
//   return a + b;
// }
// const add = (a, b) => a + b;
// console.log(add(8, 7));
// arr = [1, 2, 5, 10, 15];
// const double = [];
// const foreachArray = arr.forEach(num => {
//   double.push(num * 2);
// });
// const mapArray = arr.map(num => num * 2);
// const filterArr = arr.filter(num => num > 2);
// const reduceArr = arr.reduce((acc, num) => {
//   return acc + num;
// }, 5);
// const redarr = arr.reduce((acc, num) => {
//   acc + num;
// }, 5);
// var a = {
//   g: function thisfun() {
//     console.log(this);
//   }
// }
// class Player {
//   constructor(name, type) {
//     this.name = name;
//     this.type = type;
//   }
//   introduce() {
//     console.log(`Hello i am ${this.name} and i'm a ${this.type}`);
//   }
// }
// class Wizard extends Player {
//   constructor(name, type) {
//     super(name, type)
//   }
//   play() {
//     console.log(`hello i am a ${this.type}`);
//   }
// }
// player1 = new Wizard("Suji", "Archer");
// player2 = new Wizard("Suji1", "Archer1");
// class Animal {
//   constructor(name, type, color) {
//     this.name = name;
//     this.type = type;
//     this.color = color;
//   }
//   introduce() {
//     console.log(`hello,i am a ${this.color} color ${this.type} and my name is ${this.name}!!`);
//   }
// }
// class Cow extends Animal {
//   constructor(name, type, color) {
//     super(name, type, color)
//   }
// }
// var cow1 = new Cow("moo", "unique cow", "red");
// let abc = "acccccc";
// abc.includes("c");
// let arr = ["true", "false", "notTrue"]
// arr.includes('true');
// let string = 'abcabc';
// string.padStart(10);
// string.padEnd(10);
// let obj = {
//   name1: 'suji',
//   name2: 'hamba',
//   name3: 'khasi'
// }
// Object.values(obj).forEach(value => {
//   console.log(value);
// })
// Object.entries(obj).forEach(value => {
//   console.log(value);
// })
// Object.entries(obj).map((value) => {
//   return value[1] + value[0].replace('name', '');
// })

// console.log('aaaa');
// setTimeout(() => {
//   console.log('bbbb');

// }, 2000);
// console.log('cccc');