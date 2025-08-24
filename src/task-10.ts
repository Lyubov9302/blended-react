// Завдання:

// 1. Створіть типізовану функцію toUserObjects, яка приймає масив рядків (імен користувачів).

// 2. Усередині функції переберіть масив імен та для кожного імені створи обєкт
// з такими властивостями:

// id — порядковий номер (починаючи з 1),
// name — саме імя користувача (рядок з масиву).
// 3. Функція повинна повертати масив отриманих обєктів.

// 4. Переконайтеся, що результат функції має правильну типізацію,
// а TypeScript не видає помилок.
// Приклад виклику:

// toUserObjects(users);
// Повертає: [{ id: 1, name: "alice" }, { id: 2, name: "bob" }, { id: 3, name: "charlie" }]

// const users = ["alice", "bob", "charlie"];

// interface User {
//   id: number;
//   name: string;
// }

// function toUserObjects(users: string[]): User[] {
//   return users.map((name, index) => ({
//     id: index + 1,
//     name,
//   }));
// }

// console.log(toUserObjects(users));

// 10 - b

// Cтворіть інтерфес Person, який має:
// - id: number,
// - year: number,
// - age: number,

// Напишіть функцію toPersons,
// яка приймає масив років (number[]) і повертає масив обєктів
// типу Person
// id - порядковий номер починаючи з 1
// year - рік з масиву
// age - обчислюється як 2025 - year

const years = [1990, 1985, 2000];

interface Person {
  id: number;
  year: number;
  age: number;
}

function toPersons(years: number[]): Person[] {
  return years.map((year, index) => ({
    id: index + 1,
    year,
    age: 2025 - year,
  }));
}

console.log(toPersons(years));
