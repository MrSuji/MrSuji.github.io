var one = document.getElementById("numone");
var two = document.getElementById("numtwo");
var sum = document.getElementById("thesum");
one.addEventListener("input", add);
two.addEventListener("input", add);
function add() {
  var one1 = parseFloat(one.value) || 0;
  var two2 = parseFloat(two.value) || 0;
  var sum3 = one1 + two2;
  sum.innerHTML = "Sum: " + sum3;
}