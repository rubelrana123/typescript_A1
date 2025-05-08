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