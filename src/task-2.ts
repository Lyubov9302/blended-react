// Завдання:

// Типізуйте параметри функції дозволивши властивості currency лише одне із
//  значень "USD", "EUR", "UAH".
// Типізуйте повернення функції.

type CurrencyValue = "USD" | "EUR" | "UAH";

type Currency = {
  amount: number;
  currency: CurrencyValue;
};

function convertCurrency({ amount, currency }: Currency): void {
  console.log(`Converting ${amount} to ${currency}`);
}

convertCurrency({ amount: 22, currency: "EUR" });
