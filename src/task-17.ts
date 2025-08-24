// Функція fetchUsers повертає проміс, який через
// fetch отримує список користувачів з API.

// Завдання:

// Оголосіть інтерфейс User для користувача (перевірте,
//    які властивості користувача містяться у відповіді бекенда).
// Типізуйте функцію fetchUsers.

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    city: string;
    geo: { lat: string; lng: string };
    street: string;
    suite: string;
    zipcode: string;
  };
}

const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = (await response.json()) as User[];
  return data;
};

console.log(fetchUsers().then((users) => console.log(users)));
