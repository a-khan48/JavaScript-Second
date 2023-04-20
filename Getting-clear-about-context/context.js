// 1. What are the three types of execution contexts in JavaScript? Briefly explain each type.

//// When using JavaScript inside a browser like Chrome, Chrome itself can't run any code without the use of a rendering-
//// engine. So Chrome implements the uses of engines such as the Blink engine to render HTML and CSS, and the V8 engine-
//// which is inside of the Blink engine to execute JavaScript code.

//// The environments JavaScript engines use to transform and execute code are known as ***Execution Contexts***
//// The three types of execution contexts in JavaScript are:

//// 1. The Global Execution Context:
////// The default execution context type for Javascript. This context is created when a script starts running.
////// It includes the global objext and any global variables and functions

//// 2. The Function Execution Context:
////// A context which is created whenever a function is called. This execution context includes function arguments,- 
////// local variables, and the value of 'this'.

//// 3. The Eval Execution Context:
////// A special execution context created when the 'eval' function is used to execute a string of JavaScript code.


// ------------------------------------------------------------------------------------------------------------------ //


// 2. Explain the concept of variable hoisting in JavaScript. Provide an example to illustrate your explanation.
//// Variable hoisting is the process of placing certain variables and functions at the start of your code in order to-
//// allow them to be called anywhere in your code. 

//// The reason that this is done is to prevent complications that can arise if certain parts of your code are unable to-
//// call a certain variable due to it being defined further down in your code.

//// Hoisting Example:

let x = 5
let y = 2

function multiply(x, y){
    return x * y // returns 10
}
console.log(multiply(x,y))

//// Heres what would happen if I didn't hoist the x and y variables:

function multiply2 (a, b) {
    return a * b // variables a and b aren't defined, so an error will occur
}
console.log(multiply2(a,b))

let a = 5
let b = 2


// ------------------------------------------------------------------------------------------------------------------ //


// 3. What is the difference between 'var', 'let', and 'const' when declaring variables in JavaScript? 
// Provide examples for each.

//// In JavaScript, you have three variables that can contain data. Each variable has a different properties.
//// These variables are:

////// var:
//////// the var variable has a function scope and global scope, meaning the variable is visible either inside-
//////// a function, if defined inside, or if defined, globally. this can cause some issues, so var is generally not used.

//////// Example:

var first = 5
var second = 2
var add = first + second;


////// let: 
//////// the let variable has a block scope and global scope, meaning the variable is only visible either inside-
//////// a function's block (inside the curly braces "{}"), or globally, if defined.

//////// Example:

let z = 9;

if (z===9) {
let z = 10
console.log(z) // output: 10
}

console.log (z) // output: 9



////// const: 
//////// the const variable is very similar to the let variable, in that it is also block scoped.
//////// However, const is used to declare a constant value which cannot be changed after initialization.

//////// Example:

const constant = 25

constant = 50 // since this variable is a const, it cannot be changed and this will cause an error.


// ------------------------------------------------------------------------------------------------------------------ //


// 4. Explain the concept of scope in JavaScript. How does it relate to execution context and variable environment?

//// In JavaScript, scope is the context in which a variable is accessible in a script.
//// JavaScript has two types of scope, global scope and local scope:

////// Global Scope:
/////// A variable that is defined outside of any function, leaving the variable to be in the global scope.
/////// This allows the variable to be accessable  anywhere in the code under its declaration.

////// Local Scope:
/////// A variable defined inside of a function, meaning the variable can only be accessed inside of that function.
/////// Local scope variables can only be used inside of the functions they are defined in and can't be accessed-
/////// indiviudally in other functions, unlike global scoped variables.

/////// Block Scope:
///////// Different from global and local scopes, block scopes only apply to the variables let and const.
///////// These variables can only be accessed by code inside of its block (curly braces: {}).
///////// Whereas global and certain local scope variables can be accessed if called upon anywhere in a script,-
///////// block scoped variables can't be accessed in any capacity if called outside of its block.

//// This all ties back to both execution context and variable environment as both involve scope in some way.
//// Execution context involves scope in figuring out what variables are executed in which context-
//// (global scoped variables are executed using the global execution context, local scoped using the function-
//// execution context.)
//// With variable environment, it only refers to variables which were created within the scope of a provided function.


// ------------------------------------------------------------------------------------------------------------------ //


// Write a JavaScript code snippet to demonstrate the use of an if/else statement and a for loop.

//// iF, else Example:

let number1 = 20
let number2 = 10
let subtract = number1 - number2 

if (subtract >=15) {
    console.log("The final answer is greater than or equal to 15")
} else {
    console.log("The final answer is less than 15")
}

//// for loop Example:

for (let i = 8; i > 5; i--){
    console.log ("Reverse Iteration", i)
}


// ------------------------------------------------------------------------------------------------------------------ //


// What is the difference between a named function, an anonymous function expression, and an arrow function?
// Provide examples for each.

//// There are different varieties of functions and function expressions.
//// The differences in these varieties equate to different syntaxes and behaviors as compared to one another.

//// Named Function:
////// A named function is a function that has a name attatched to it, which allows it to be called anywhere in the code.
////// Example:

function named() {
    console.log("Named function.")
}
named()

//// Anonymous Function: 
////// An anonymous function is a function with no name attatched, meaning it cannot be called or changed anywhere in-
////// the code besides in which variable it is declared.
////// Example:

let anonymous = function(){
    console.log ("Anonymous function.")
}
anonymous()

//// Arrow function:
//// Arrow functions are a more concise way of writing a named function. They also behave differently when using-
//// the "this" keyword.
//// Example:

let arrow = () =>{
    console.log("Arrow function.")
}
arrow()


// ------------------------------------------------------------------------------------------------------------------ //


// Briefly explain the role of the JavaScript engine in processing a script, and how it handles asynchronous-
// tasks using callback functions, Promises, and async/await syntax.

//// A JavaScript engine is used to transform and execute JavaScript code in a web browser. JavaScript itself is a-
//// synchronous language, meaning that normally, JavaScript will execute lines of code in the order that it's written
//// This can cause some complications in actual use of JS. If there is a line of code that requires a response from a-
//// database, this will take some time to achieve, so JavaScript has the ability to implement asynchronous tasks that-
//// run separately from synchronous tasks in the form of callback functions, promises, and the async/await syntax.

//// Callback functions are an argument that is passed to another function which is executed after that function is-
//// completed. For example, if we have a button that is toggled once pressed, it wouldn't be wise to stop the rest-
//// of the code from executing due to this. So we can implement a callback function that will toggle the button once
//// the function is completed (i.e. when the button is clicked).

//// A promise is an object that represents the eventual completion or failure of a given operation.
//// JavaScript promises have three states, pending, fulfilled, and rejected. 
//// This allows the JS code to continue to run while waiting for a pending promise to be fulfilled or rejected.
//// Once the pending promise has completed it's operation, whether fulfilled or rejected, it will return a result.

//// Async/Await are a syntax for asynchronous code, built ontop of promises.
//// A function can be declared with "async" allowing it to return a promise.
//// "Await" can be placed inside of an async function, allowing the code to be blocked from executing until the promise-
//// is fulfilled or rejected


// ------------------------------------------------------------------------------------------------------------------ //
