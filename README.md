## 🎯 Interview Questions - Blog Task
# Provide an example of using union and intersection types in TypeScript.

## Union type:

In the union type we can hold several type. You can define union using pipe(|).character.

 
 Example:

```ts
//union type
type Status = "success" | "error" | "loading";
let currentStatus: Status;
currentStatus = "success"; // ✅
currentStatus = "error";   // ✅
currentStatus = "loading"; // ✅
currentStatus = "done";    // ❌ Error: not part of the union

```

## Intersection Types

Intersection type mainly used to combine two type into one. You can use it use & character.

Example :

```ts
// //intersection type

type User = {
  name: string;
  email: string;
};

type Admin = {
  adminLevel: number;
};

type AdminUser = User & Admin;

const admin: AdminUser = {
  name: "Rubel",
  email: "rubel@example.com",
  adminLevel: 1
};

```

Summary : 

1. When you need to use **one type out of multiple options**, consider using **Union Types**.

1. When you need to **combine two or more types**, consider using **Intersection Types**.

---

# What is the use of the keyof keyword in TypeScript? Provide an example

The keyof operator takes an object type and produces a string or numeric literal union of its keys.

```ts
interface User {
  name: string;
  age: number;
}
```

Using `keyof`, we can create a type that represents the **keys** of the `Person` interface:

```ts
type PersonKeys = keyof Person; // Equivalent to: 'name' | 'age'
```

This means `PersonKeys` can only be one of `'name'`, `'age'`.

Use `keyof` in a function to ensure only valid keys are used when accessing values:

```ts
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person: Person = {
  name: "Rafsan",
  age: 25,
};

const value = getValue(person, "name");
```

In the above example `keyof` ensures that `key` must be a valid key of the object `T`. If you tried access any different property, that didn't exist in the object, TypeScript give you a error at compile time. Thats the power of type safety.

The `keyof` keyword improve type safety by making sure you only access valid property names of a object