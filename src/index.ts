// console.log("B_5_A_1");
// task -1 :
function formatString(input: string, toUpper?: boolean): string {
    const result = toUpper === false ? input.toLowerCase() : input.toUpperCase();
    return result;
}

formatString("Hello");          // Output: "HELLO"
formatString("Hello", true);   // Output: "HELLO"
formatString("Hello", false);  // Output: "hello"

//task 2
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
  ];
function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    let filteredBooks = items.filter((item) => item.rating >= 4);
    return filteredBooks;
}

const result = filterByRating(books); 
// console.log(result)

//problem 3 
function concatenateArrays<T>(...arrays: T[][]): T[] {
     
    const result: T[] = [];
    for (const array of arrays) {
      result.push(...array);
    }
    return result;
 
     

}
// concatenateArrays(["a", "b"], ["c"]);       // Output: ["a", "b", "c"]
const arrayresult = concatenateArrays([1, 2], [3, 4], [5]);     // Output: [1, 2, 3, 4, 5]

// console.log(arrayresult)



//problem 4
class Vehicle {
   private _make : string;
   private _year : number;
    constructor (make : string,year : number){
        this._make = make;
        this._year = year;
    }
    getInfo() {
        return `Make: ${this._make}, Year: ${this._year}`

    }
}
class Car extends Vehicle {
    private _model : string;
    constructor(make : string, year : number, model : string){
        super(make,year)
        this._model = model;

    }
    getModel () {
        return `model : ${this._model}`

    }
}
const myCar = new Car("Toyota", 2020, "Corolla");
const results =  myCar.getInfo();// Output: "Make: Toyota, Year: 2020"
// console.log(results)
const result2 = myCar.getModel();  // Output: "Model: Corolla"
// console.log(result2)

//problem 5 :
function processValue(value: string | number): number {
   if (typeof value === "string") {
    return value.length;
    
   }
   return value * value
}
// console.log(processValue("hello"));
// console.log(processValue(10))
processValue(10);      // Output: 20
processValue("hello"); // Output: 5

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

  const products   = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
  ];
  
  const myresult = getMostExpensiveProduct(products); 
//   console.log(myresult) 
  // Output: { name: "Bag", price: 50 }

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
      case Day.Friday:
      case Day.Saturday:
        return "Weekend";
  
      default:
        return "Weekday";
    }
  }
 const rsult =  getDayType(Day.Monday);   // Output: "Weekday"
  const dayresult = getDayType(Day.Sunday);  // Output: "Weekend"
//   console.log(rsult, dayresult) 
 
//task 8 
async function squareAsync(n: number): Promise<number | void> {
    new Promise<number>((resolve, reject) => {
        if(n > 0){
            setTimeout(() => {
                return resolve(n * n);
            }, 1000);
        }
        else {
             reject("Error : Negative number not allowed");
        }
    
    })
    

}
// squareAsync(4).then(console.log);        // Output after 1s: 16
// squareAsync(-3).catch(console.error);    // Output: Error: Negative number not allowed
