## 🎯 Interview Questions - Blog Task
# Provide an example of using union and intersection types in TypeScript.

## Union type:

In the union type we can hold several type. You can define union using pipe(|).character.

basic syntax of the union-

```ts
function(id: string | number){

// here you can use id as number or string

}
```

full example:

```ts
function studentID(id: string | number) {
  console.log("Your ID is: " + id);
}

studentID(01); // Output: Your ID is: 01
studentID("A11"); // Output: Your ID is: A11
```

## Intersection Types

Intersection type mainly used to combine two type into one. You can use it use & character.

basic syntax:

```ts
type A{

a:string;

}

type B {

b:number;

}

type AB = A & B;
```

full example:

```ts
type Person = {
  name: string;
  age: number;
}

type Employee = {
  employeeID: string;
}

type Staff = Person & Employee;

const employeeMembor: Staff = {
  name: “Rafsan”,
  age: 28,
  employeeID: “A11”
}
```

Finally

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