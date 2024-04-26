/*
We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example
add("123", "321"); -> "444"
add("11", "99");   -> "110"
Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives

*/

function add(a, b) {
  let result = "",
    carryOver = 0;

  while (a.length > 0 || b.length > 0 || carryOver) {
    let num1 = a ? Number(a[a.length - 1]) : 0;
    let num2 = b ? Number(b[b.length - 1]) : 0;
    let addNumbers = num1 + num2 + carryOver;

    carryOver = Math.floor(addNumbers / 10);
    addNumbers = (addNumbers % 10).toString();
    a = a.slice(0, -1);
    b = b.slice(0, -1);
    result = addNumbers + result;
  }

  return result;
}
