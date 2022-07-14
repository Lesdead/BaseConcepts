"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  if (a < 0) {
    return false;
  }
  let x1;
  let x2;
  let discriminant = (b ** 2 - 4 * a * c);

  if (discriminant < 0) {
    return arr;
  } else if (discriminant === 0) {
     x1 = arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
     return x1
     
  } else if (discriminant > 0) {
    let answer = {};
    x1 = arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
    x2 = arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
    answer.firstRoot = x1;
    answer.SecondRoot = x2;
    return answer;

  }

  return arr; // array
}
