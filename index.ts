// Problem - 1 :
function formatString(input: string, toUpper?: boolean): string {
    const result = toUpper === false ? input.toLowerCase() : input.toUpperCase();
    return result;
}
//Problem : 2 test done : 
function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    let filteredBooks = items.filter((item) => item.rating >= 4);
    return filteredBooks;
}
//problem 3 
function concatenateArrays<T>(...arrays: T[][]): T[] {
    const result: T[] = [];
    for (const array of arrays) {
      result.push(...array);
    }
    return result;
}
//problem 4 
class Vehicle {
   private _make : string;
   private _year : number;
    constructor (make : string,year : number){
        this._make = make;
        this._year = year;
    }
    getInfo() {
        console.log(`Make: ${this._make}, Year: ${this._year}`)

    }
}
class Car extends Vehicle {
    private _model : string;
    constructor(make : string, year : number, model : string){
        super(make,year)
        this._model = model;

    }
    getModel () {
        console.log(`Model : ${this._model}`)

    }
} 
//problem 5 :
function processValue(value: string | number): number {
    return typeof value === "string" ? value.length : value * 2;
  } 

//problem 6 
interface Product {
    name: string;
    price: number;
  }
 function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) return null;
    let mostExpensive = products[0];

    for (const product of products) {
      if (product.price > mostExpensive.price) {
        mostExpensive = product;
      }
    }
    return mostExpensive;

  }
  //problem 7
  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string {
    switch (day) {
      case Day.Saturday:
      case Day.Sunday:
        return "Weekend";
  
      default:
        return "Weekday";
    }
  } 
 
//task 8 
async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(n * n);
      }, 1000);
  
      if (n < 0) {
        reject("Error: Negative number not allowed");
      }
    });
  } 
