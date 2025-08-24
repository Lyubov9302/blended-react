// Типізуйте параметр callback, щоб це була функція, яка приймає рядок і повертав void.

// function sendDoneStatus(callback: (msg: string) => void): void {
//   callback("done");
// }

// sendDoneStatus((text) => {
//   console.log(text);
// });

// 12 - b
// Є функція processNumbers, яка приймає масив чисел і колбек.
// Колбек повинен приймати одне число і нічого не повертати (void).
// Функція повинна пройтись по масиву і викликати колбек для кожного числа.

// Завдання
// 	1.	Створіть тип для колбеку.
// 	2.	Типізуйте параметри функції processNumbers.
// 	3.	Викличте processNumbers, передавши:
// 	•	колбек, що виводить число в консоль,
// 	•	колбек, що виводить квадрат числа.

type NumberCallback = (n: number) => void;

function processNumbers(numbers: number[], callback: NumberCallback): void {
  for (const num of numbers) {
    callback(num);
  }
}

processNumbers([1, 2, 3], (n) => {
  console.log("Number:", n);
});
// Number: 1
// Number: 2
// Number: 3

processNumbers([1, 2, 3], (n) => {
  console.log("Square:", n * n);
});
// Square: 1
// Square: 4
// Square: 9
