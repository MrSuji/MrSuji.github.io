// alert("Welcome to my website!!!!!");
console.log("heloooooooo!!!!");

function jsfunc() {
  console.log(5 * 3);
}
jsfunc();
var sayHello = function() {
  console.log("Hellooooooooooo!!!!!!!!!!");
};
sayHello();
var singers = function(singer) {
  console.log(singer);
};
singers("Ariana Grande");
singers("Adam levine");
singers("Adele");
singers("Anne Marie");
var multiply = function(a, b) {
  if (a >= 10 || b >= 10) {
    console.log("This is too difficult for me!!!");
  } else {
    return a * b;
  }
};
multiply();
// var age = function () {
//     var driverage = prompt("enter your age!!");
//     if (Number(driverage) >= 18) {
//         alert("Enjoy the ride!!!!!");
//     } else {
//         alert("you are too young for driving!!!!")
//     }
// }
// age();
var driverage = function(age) {
  if (Number(age) > 18) {
    return "Enjoy your ride!!!!!!";
  } else if (Number(age) < 18) {
    return "You are too young for the ride!!!!!";
  } else if (Number(age) === 18) {
    return "Enjoy your first ride!!!!";
  }
};
driverage();
var array = [
  ["tiger", "lion", "deer", "bear", "dog"]
];
console.log(array[2]);
var mix = [true, false, 1.48, 4, "string", undefined, function apple() {
  console.log("apple");
}]
console.log(array[0][1]);
var user = {
  name: "Suji",
  age: 19,
  isMarried: false,
  hobby: "cycling",
  number: [0, 1, 2, 3, 4, 5, 6, 7],
}
number2 = [0, 1, 2, 3, 4, {
  name: "Suji",
  age: 19,
  isMarried: false,
  hobby: "cycling",
  shout: function spell() {
    console.log("AAAAAAHHHHHHH!!!!!!");
  }
}, 5, 6, 7, ]
// for (var i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }
var todo = ["play", "game", "study", "read", "write"];
var length = todo.length;
for (i = 0; i < length; i++) {
  todo[i] = todo[i] + "!";
  console.log(todo[i], i);
}
var i = 10;
var j = 10;
while (j > 0) {
  console.log("while", j);
  j--;
}
do {
  console.log("do while", i);
  i--;
}
while (i > 0)
for (var i = 0; i < 5; i++) {
  console.log([i]);
}
i = 1;
do {
  console.log("hello world");
  i++;
} while (i < 5);
for (var i = 0; i < 4; i++) {
  console.log("for loop");
}
array = ["a", "b", "c", "d", "e"];
array.forEach(function(letter, index) {
  console.log(`this is ${index} -- ${letter}`);
});
