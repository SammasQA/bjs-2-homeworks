"use strict"

// Задача 1: квадратное уравнение
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c; // дискриминант

  if (d < 0) {
    return arr; // пустой массив
  } else if (d === 0) {
    let root = -b / (2 * a);
    arr.push(root);
  } else {
    let sqrtD = Math.sqrt(d);
    let root1 = (-b + sqrtD) / (2 * a);
    let root2 = (-b - sqrtD) / (2 * a);
    arr.push(root1, root2);
  }
  return arr;
}