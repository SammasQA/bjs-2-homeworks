// ЗАДАЧА 1. 
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  let count = 0;
  let allCount = 0;

  function wrapper(...args) {
    allCount++;
    if (timeoutId === null) {
      func(...args);
      count++;
      timeoutId = setTimeout(() => {
        timeoutId = null;
      }, delay);
    }
  }

  Object.defineProperty(wrapper, 'count', {
    get: () => count
  });
  Object.defineProperty(wrapper, 'allCount', {
    get: () => allCount
  });

  return wrapper;
}
// ЗАДАЧА 2. 
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  let count = 0;
  let allCount = 0;
  let lastArgs = null;
  let hasRepeated = false;

  function wrapper(...args) {
    allCount++;
    lastArgs = args;

    if (timeoutId === null) {
     
      func(...args);
      count++;
    } else {
  
      hasRepeated = true;
    }

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      if (hasRepeated) {
        func(...lastArgs);
        count++;
      }
      timeoutId = null;
      hasRepeated = false;
    }, delay);
  }

  Object.defineProperty(wrapper, 'count', {
    get: () => count
  });
  Object.defineProperty(wrapper, 'allCount', {
    get: () => allCount
  });

  return wrapper;
}

/*
//Для проверки
const sendSignal = (signalOrder, delay) => console.log("Сигнал отправлен", signalOrder, delay);
const upgraded = debounceDecoratorNew(sendSignal, 2000);

setTimeout(() => upgraded(1, 0), 0);
setTimeout(() => upgraded(2, 300), 300);
setTimeout(() => upgraded(3, 900), 900);
setTimeout(() => upgraded(4, 1200), 1200);
setTimeout(() => upgraded(5, 2300), 2300);
setTimeout(() => upgraded(6, 4400), 4400);
setTimeout(() => upgraded(7, 4500), 4500);

setTimeout(() => {
  console.log(upgraded.count);    // 3
  console.log(upgraded.allCount); // 7
}, 7000);
*/