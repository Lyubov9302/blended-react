// Типізуйте state як число.
// Створіть тип Action, що може приймати як
// значення лише рядки increment та decrement.
// Типізуйте функцію повністю.

type Action = "decrement" | "increment";

function reducer(state: number, action: Action): number {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

console.log(reducer(5, "increment"));
console.log(reducer(5, "decrement"));
