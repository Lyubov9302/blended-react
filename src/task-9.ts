// 1. Створіть інтерфейс Container, що містить:

// масив items однакового типу для зберігання елементів.
// метод addItem, який додає елемент до контейнера.
// метод getItem, який повертає елемент за індексом.
// 2.  Створіть два контейнери:

// numberContainer, який містить числа та використовує відповідну типізацію.
// stringContainer, який містить рядки та також використовує відповідну типізацію.
// 3. Використовуйте методи addItem, getItem для перевірки роботи контейнера.

// 4. Створіть функцію getLastElement, яка приймає масив елементів контейнера
//  Container і повертає останній елемент масиву.

// 5. Переконайтесь, що функція getLastElement працює коректно для
// різних типів контейнерів (масиви чисел, масиви рядків).

// interface Container<T> {
//   items: T[];
//   addItem(item: T): void;
//   getItem(index: number): T;
// }

// const numberContainer: Container<number> = {
//   items: [],
//   addItem(item) {
//     this.items.push(item);
//   },
//   getItem(index) {
//     return this.items[index];
//   },
// };

// const stringContainer: Container<string> = {
//   items: [],
//   addItem(item) {
//     this.items.push(item);
//   },
//   getItem(index) {
//     return this.items[index];
//   },
// };

// function getLastElement<T>(items: T[]): T {
//   return items[items.length - 1];
// }

// numberContainer.addItem(10);
// numberContainer.addItem(20);

// stringContainer.addItem("hello");
// stringContainer.addItem("world");

// console.log(numberContainer.getItem(0)); // 10
// console.log(stringContainer.getItem(1)); // "world"

// console.log(getLastElement(numberContainer.items)); // 20
// console.log(getLastElement(stringContainer.items)); // "world"

// 9 - b
// Створи інтерфес Bох, який:
// - має масив items одного типу
// - метод add, який додає елемент у масив
// - метод first, яикй повертає переший елемент масив

interface Box<T> {
  items: T[];
  add(item: T): void;
  first(): T;
}

const numberBox: Box<number> = {
  items: [],
  add(item) {
    this.items.push(item);
  },
  first() {
    return this.items[0];
  },
};

numberBox.add(5);
numberBox.add(10);

console.log(numberBox.first()); // 5

const stringBox: Box<string> = {
  items: [],
  add(item) {
    this.items.push(item);
  },
  first() {
    return this.items[0];
  },
};

stringBox.add("Alice");
stringBox.add("Bob");

console.log(stringBox.first()); // "Alice"
