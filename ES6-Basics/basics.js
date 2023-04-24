let numbers1 = [1 , 2]
let numbers2 = [3 , 4 , 5, 6, 7]

let numbers = [...numbers1, ...numbers2]
// console.log(numbers)

let square = (x) => { return x * x }
// console.log(square(5))

let squares = numbers.map(x => square(x))
// console.log(squares)

let isEven = (x) => {
    if (x % 2 === 0){
      return true;
    }else{
      return false;
    }
  }
// console.log(isEven(2), isEven(3))

let evenSquares = squares.filter((x) => isEven(x))
// console.log(evenSquares)

let [firstEvenSquare, secondEvenSquare] = evenSquares
// console.log(secondEvenSquare)

console.log(`numbers array: ${numbers} squares array: ${squares} even squares array: ${evenSquares} extracted even squares: ${firstEvenSquare}, ${secondEvenSquare}`)


