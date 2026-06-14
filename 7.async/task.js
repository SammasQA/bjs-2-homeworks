// ЗАДАЧА 1.
class AlarmClock {
  constructor() {
    this.alarmCollection = [];   
    this.intervalId = null;      
  }
  // Добавление звонка
  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }
    // Проверка на существующий звонок с таким же временем
    const hasDuplicate = this.alarmCollection.some(alarm => alarm.time === time);
    if (hasDuplicate) {
      console.warn('Уже присутствует звонок на это же время');
    }
    this.alarmCollection.push({
      time,
      callback,
      canCall: true
    });
  }
  // Удаление звонков по времени
  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
  }
  // Текущее время в формате
  getCurrentFormattedTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }
  // Запуск будильника
  start() {
    if (this.intervalId !== null) {
      return; //
    }
    this.intervalId = setInterval(() => {
      const currentTime = this.getCurrentFormattedTime();
      this.alarmCollection.forEach(alarm => {
        if (alarm.time === currentTime && alarm.canCall) {
          alarm.canCall = false;
          alarm.callback();
        }
      });
    }, 1000);
  }
  // Остановка будильника
  stop() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
  // Сброс флага canCall
  resetAllCalls() {
    this.alarmCollection.forEach(alarm => {
      alarm.canCall = true;
    });
  }
  // Удаление всех звонков
  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}

/*
// ДЛЯ ПРОВЕРКИ


function testCase() {
  const alarm = new AlarmClock();
  
  alarm.addClock("15:30", () => console.log("Пора на пары!"));
  
  alarm.addClock("15:30", () => console.log("Дубль"));
  
  console.log("Текущее время:", alarm.getCurrentFormattedTime());
  
  alarm.removeClock("15:30");
  console.log("Звонков после удаления:", alarm.alarmCollection.length); // 0
  
  alarm.addClock("16:00", () => console.log("Завершение пар"));
  
  alarm.start();
  

  setTimeout(() => {
    alarm.stop();
    console.log("Будильник остановлен");
  }, 5000);
  
  /
  alarm.resetAllCalls();
  
  // Очистка 
  // alarm.clearAlarms();
}

// testCase();
*/