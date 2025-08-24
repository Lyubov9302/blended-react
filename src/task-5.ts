// Типізуйте функцію повністю: параметри і повернення функції.

// interface User {
//   name: string;
//   age: number;
//   isAdmin?: boolean;
// }

// type UserInput = {
//   name: string;
//   age: number;
// }

// function createUser({ name, age }: UserInput): User {
//   return {
//     name,
//     age,
//     isAdmin: false,
//   };
// }

// console.log(createUser({ name: "Alice", age: 30 }));

// 5 - b
// У тебе є інтерфейс Product,
// який описує товар в інтернет-магазині:

// Завдання
// 	1.	Створи функцію createProduct, яка:
// 	•	приймає тільки name і price (без id та inStock),
// 	•	автоматично генерує id (наприклад, "p-" + Math.random()),
// 	•	ставить inStock за замовчуванням у true,
// 	•	повертає повний обєкт типу Product.
// 	2.	Явно типізуй параметри та тип повернення функції.

interface Product {
  id: string;
  name: string;
  price: number;
  inStock: boolean;
}

interface ProductInput {
  name: string;
  price: number;
}

function createProduct({ name, price }: ProductInput): Product {
  return {
    id: "p-" + Math.floor(Math.random() * 10000),
    name,
    price,
    inStock: true,
  };
}

console.log(createProduct({ name: "Laptop", price: 1500 }));
