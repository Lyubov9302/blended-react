// Завдання:

// Створіть інтерфейс User, який описує структуру обєкта з іменем і віком.
// Типізуйте змінну users.
// Додайте ще одного користувача до масиву, дотримуючись структури.
// Переконайтеся, що TypeScript не дозволяє додати обєкт без
// обовязкових полів (name, age).

interface User {
  name: string;
  age: number;
}

const users: User[] = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Cate", age: 33 },
];

console.log(users);
