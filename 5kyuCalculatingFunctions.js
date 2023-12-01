/* This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three())); */

function zero(operand) {
  return operand ? Math.floor(eval("0" + operand)) : 0;
}
function one(operand) {
  return operand ? Math.floor(eval("1" + operand)) : 1;
}
function two(operand) {
  return operand ? Math.floor(eval("2" + operand)) : 2;
}
function three(operand) {
  return operand ? Math.floor(eval("3" + operand)) : 3;
}
function four(operand) {
  return operand ? Math.floor(eval("4" + operand)) : 4;
}
function five(operand) {
  return operand ? Math.floor(eval("5" + operand)) : 5;
}
function six(operand) {
  return operand ? Math.floor(eval("6" + operand)) : 6;
}
function seven(operand) {
  return operand ? Math.floor(eval("7" + operand)) : 7;
}
function eight(operand) {
  return operand ? Math.floor(eval("8" + operand)) : 8;
}
function nine(operand) {
  return operand ? Math.floor(eval("9" + operand)) : 9;
}

function plus(num) {
  return "+" + num;
}
function minus(num) {
  return "-" + num;
}
function times(num) {
  return "*" + num;
}
function dividedBy(num) {
  return "/" + num;
}
