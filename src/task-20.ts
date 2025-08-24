// Функція fetchPosts повинна отримати список постів з
//  API за допомогою бібліотеки axios.

// Завдання:

// Оголосіть інтерфейс Post для поста (перевірте,
//      які властивості користувача містяться у відповіді бекенда).
// Типізуйте функцію fetchPosts, вказавши, що вона повертає проміс,
//  який містить масив об'єктів типу Post.
// Оголосіть функцію logThreePosts, яка виведе в консоль дані перших 3
//  постів, виводячи їхні title та body.

import axios from "axios";

// 1) Інтерфейс для поста (за JSONPlaceholder)
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// 2) Функція, що отримує список постів
const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
};

// 3) Функція, що логує перші 3 пости (title + body)
const logThreePosts = async (): Promise<void> => {
  try {
    const posts = await fetchPosts();
    posts.slice(0, 3).forEach((post, i) => {
      console.log(`#${i + 1}`);
      console.log("title:", post.title);
      console.log("body:", post.body);
      console.log("———");
    });
  } catch (e) {
    console.error("Не вдалося завантажити пости:", e);
  }
};

// Виклик
logThreePosts();
