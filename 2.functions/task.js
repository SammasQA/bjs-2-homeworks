// задача 1
function getArrayParams(...arr) {
 
  if (arr.length === 0) {
    return { min: 0, max: 0, avg: 0 };
  }
  
  let min = Infinity;  
  let max = -Infinity;  
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num < min) min = num;
    if (num > max) max = num;
    sum += num;
  }
  
  const avg = +(sum / arr.length).toFixed(2); 
  return { min, max, avg };
}

//задача 2

function summElementsWorker(...arr) { //сумма элементов
  if (arr.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
  
}

function differenceMaxMinWorker(...arr) { // разность max и min
  if (arr.length === 0) return 0;
  let max = arr[0];
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }
  return max - min;
 
}

function differenceEvenOddWorker(...arr) { // разность сумм чёт и нечёт
  if (arr.length === 0) return 0;
  let sumEven = 0;
  let sumOdd = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEven += arr[i];
    } else {
      sumOdd += arr[i];
    }
  }
  return sumEven - sumOdd;
}

function averageEvenElementsWorker(...arr) { // сред арифм.
  if (arr.length === 0) return 0;
  let sumEven = 0;
  let countEven = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEven += arr[i];
      countEven++;
    }
  }
  if (countEven === 0) return 0; 
  return sumEven / countEven;
}

//задача 3

function makeWork(arrOfArr, func) {
  if (!arrOfArr || arrOfArr.length === 0) return 0;
  let maxResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    
    const result = func(...arrOfArr[i]);
    if (result > maxResult) {
      maxResult = result;
    }
  }
  return maxResult;
}

/* проверка

console.log(getArrayParams(-99, 99, 10)); 
console.log(summElementsWorker(10, 10, 11, 20, 10)); 
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10));
console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); 
console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); 

const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
console.log(makeWork(arr, summElementsWorker)); 
console.log(makeWork(arr, differenceMaxMinWorker)); 
console.log(makeWork(arr, differenceEvenOddWorker)); 
console.log(makeWork(arr, averageEvenElementsWorker)); 

*/