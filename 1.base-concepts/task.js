"use strict"

// Задача 1: квадратное уравнение
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c; // дискриминант

  if (d < 0) {
    return arr; 
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

//примеры для отладки
//console.log(solveEquation(1, -3, 2));
//console.log(solveEquation(1, 2, 1)); 
//console.log(solveEquation(1, 0, 1));

// Задача 2: ипотечный калькулятор
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // Вспомогательная функция для преобразования аргументов
  function toNumber(value) {
    if (typeof value === 'string') {
      const num = parseFloat(value);
      return isNaN(num) ? false : num;
    }
    if (typeof value === 'number' && !isNaN(value)) return value;
    return false;
  }

  const p = toNumber(percent);
  const c = toNumber(contribution);
  const a = toNumber(amount);
  const n = toNumber(countMonths);

 
  if (p === false || c === false || a === false || n === false) return false;

  let creditBody = a - c;
  if (creditBody <= 0) return 0;

  let monthlyRate = p / 100 / 12;               
  let payment = creditBody * (monthlyRate + (monthlyRate / (Math.pow(1 + monthlyRate, n) - 1)));
  let totalAmount = payment * n;

  return Math.round(totalAmount * 100) / 100;
}

/*
примеры для отладки:
console.log(calculateTotalMortgage(10, 0, 50000, 12));   
console.log(calculateTotalMortgage(10, 1000, 50000, 12));
console.log(calculateTotalMortgage(10, 20000, 20000, 24));
console.log(calculateTotalMortgage(15, 0, 10000, 36));  
*/