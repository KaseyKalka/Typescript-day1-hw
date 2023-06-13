// Homework Exercises

// 1. For each of these values, what type will the TypeScript compiler infer?
let a = 118;
// A: number

let b = 'Thieves';
// A: string

let c = [true, false, false];
// A: boolean[] because this is a list of boolean values

let d = {age: number};
// A: None/null. I tried to log this one because I was stuck and it gave me nothing back

let e = [3]
// A: number[] because this is a list of numbers

let f;
// A: any becuase no type was declared

let g = []
// A: any[] because it is a list with no type declared



// 2. What are the compilation errors in each of the following code snippets?
let song: {
    title: string,
    releaseYear: number,
} = {
    title: 'Lose Yourself'
};
// A: releaseYear was never used and its not optional

let prices = [100, 200, 300];
prices[0] = '$100';
// A: Assigning string to list of numbers

function myFunc(a: number, b: number): number {}
// A: No return statement for this function. Specifically its not returning a number.


/********************CODE WARS**************************/
//https://www.codewars.com/kata/544675c6f971f7399a000e79/train/javascript
const stringToNumber = function(str){
    let converted = Number(str);
    return converted;
  }

//https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
function isDivisible(n, x, y) {
    if (n % x == 0 && n % y == 0){
      return true;
    } else {
      return false;
    }
  }
