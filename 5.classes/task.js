// ЗАДАЧА 1. ПЕЧАТНОЕ ИЗДАНИЕ

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  get state() {
    return this._state;
  }

  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }

  fix() {
    this.state = this.state * 1.5;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

// ЗАДАЧА 2. БИБЛИОТЕКА

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    return this.books.find(book => book[type] === value) || null;
  }

  giveBookByName(bookName) {
    const index = this.books.findIndex(book => book.name === bookName);
    if (index !== -1) {
      return this.books.splice(index, 1)[0];
    }
    return null;
  }
}

// ЗАДАЧА 3. ЖУРНАЛ УСПЕВАЕМОСТИ 

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subject) {
    // проверка: оценка должна быть числом от 2 до 5
    if (typeof mark !== 'number' || mark < 2 || mark > 5) {
      console.warn(`Оценка ${mark} не добавлена. Допустимые значения: 2, 3, 4, 5.`);
      return;
    }
   
    if (!this.marks[subject]) {
      this.marks[subject] = [];
    }
    this.marks[subject].push(mark);
  }

  getAverageBySubject(subject) {
    const subjectMarks = this.marks[subject];
    if (!subjectMarks || subjectMarks.length === 0) {
      return 0;
    }
    const sum = subjectMarks.reduce((acc, mark) => acc + mark, 0);
    return sum / subjectMarks.length;
  }

  getAverage() {
    const subjects = Object.keys(this.marks);
    if (subjects.length === 0) {
      return 0;
    }
    const totalAverage = subjects.reduce((acc, subject) => {
      return acc + this.getAverageBySubject(subject);
    }, 0);
    return totalAverage / subjects.length;
  }
}

/*
// ТЕСТОВЫЙ СЦЕНАРИЙ 


function testCase() {
  console.log("=== Тестирование классов библиотеки ===");
  const library = new Library("Городская библиотека");

  // Добавляем книги
  const detective = new DetectiveBook("Артур Конан Дойл", "Этюд в багровых тонах", 1887, 200);
  const fantastic = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);
  const novel = new NovelBook("Джордж Оруэлл", "1984", 1949, 328);
  const magazine = new Magazine("Наука и жизнь", 1890, 64);

  library.addBook(detective);
  library.addBook(fantastic);
  library.addBook(novel);
  library.addBook(magazine);

  console.log("Книг в библиотеке:", library.books.length); // 4

  // Поиск по году
  const found = library.findBookBy("releaseDate", 1972);
  console.log("Найдена книга:", found ? found.name : "не найдена"); // Пикник на обочине

  // Выдача книги
  const given = library.giveBookByName("1984");
  console.log("Выдана книга:", given.name); // 1984
  console.log("Осталось книг:", library.books.length); // 3

  // Повреждаем и чиним
  given.state = 20;
  console.log("Состояние после повреждения:", given.state); // 20
  given.fix();
  console.log("Состояние после ремонта:", given.state); // 30

 
  library.addBook(given);
  console.log("Книг после возврата:", library.books.length); // всё ещё 3

  console.log("\n=== Тестирование журнала успеваемости ===");
  const student = new Student("Иван Петров");
  student.addMark(5, "математика");
  student.addMark(4, "математика");
  student.addMark(5, "физика");
  student.addMark(3, "физика");
  student.addMark(6, "физика"); 

  console.log("Среднее по математике:", student.getAverageBySubject("математика")); // 4.5
  console.log("Среднее по химии (нет оценок):", student.getAverageBySubject("химия")); // 0
  console.log("Общий средний балл:", student.getAverage()); // (4.5 + 4) / 2 = 4.25
}


// testCase();
*/