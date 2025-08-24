// 1. Створіть функцію getPermissions, яка приймає параметр role типу Role.
// 2. Функція має повертати масив рядків, які описують права доступу для кожної ролі:
// Admin має права: "create", "read", "update", "delete"
// User має права: "read", "update"
// Guest має лише право: "read"
// 3. Типізуйте параметр і тип повернення функції getPermissions.
// 4. Перевірте, що TypeScript не дозволяє передати в getPermissions значення,
// якого немає в Role.

// enum Role {
//   Admin,
//   User,
//   Guest,
// }

// function getPermissions(role: Role): string[] {
//   switch (role) {
//     case Role.Admin:
//       return ["create", "read", "update", "delete"];
//     case Role.User:
//       return ["read", "update"];
//     case Role.Guest:
//       return ["read"];
//     default:
//       return [];
//   }
// }

// console.log(getPermissions(Role.Admin));
// console.log(getPermissions(Role.User));
// console.log(getPermissions(Role.Guest));

// 7 - b

// - Створіть тип ThemeColor,
//  який може мати лише такі значення: "red" | "blue" | "gray" | "green"
//
// Admin - red
// User - blue
// Guest - grey
// - напиши функцію getThemeColor(role: Role): ThemeColor,
//  яка повертає колір для конкретної ролі
//  - перевірте, що TS не дозвол повернути довільний рядок (напр, "pink")

// enum Role {
//   Admin,
//   User,
//   Guest,
// }

// type ThemeColor = "red" | "blue" | "grey" | "green";

// function getThemeColor(role: Role): ThemeColor {
//   switch (role) {
//     case Role.Admin:
//       return "red";
//     case Role.User:
//       return "blue";
//     case Role.Guest:
//       return "grey";
//   }
// }

// console.log(getThemeColor(Role.Admin));
// console.log(getThemeColor(Role.User));
// console.log(getThemeColor(Role.Guest));

// - інший спосіб вирішення
// створіть обєкт-мапу roleColors, який звязує кожну роль із кольором:

// enum Role {
//   Admin,
//   User,
//   Guest,
// }

// type ThemeColor = "red" | "blue" | "gray" | "green";

// // 1) мапа відповідностей ролей до кольорів
// const roleColors: Record<Role, ThemeColor> = {
//   [Role.Admin]: "red",
//   [Role.User]: "blue",
//   [Role.Guest]: "gray",
// };

// // 2) функція просто повертає значення з мапи
// function getThemeColor(role: Role): ThemeColor {
//   return roleColors[role];
// }

// console.log(getThemeColor(Role.Admin)); // "red"
// console.log(getThemeColor(Role.User)); // "blue"
// console.log(getThemeColor(Role.Guest)); // "gray"

// - ще інший спосіб вирішення через if

// enum Role {
//   Admin,
//   User,
//   Guest,
// }

// type ThemeColor = "red" | "blue" | "grey" | "green";

// function getThemeColor(role: Role): ThemeColor {
//   if (role === Role.Admin) {
//     return "red";
//   } else if (role === Role.Guest) {
//     return "blue";
//   } else {
//     return "grey";
//   }
// }

// console.log(getThemeColor(Role.Admin));
// console.log(getThemeColor(Role.Guest));
// console.log(getThemeColor(Role.User));
