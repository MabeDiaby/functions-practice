/*
 * Before you start, add this javascript file in a script tag in index.html.
 *
 * Tip: Comment out your solution to a prompt before moving on to the next one.
 * It will keep your console clean and easy to read!
 */

/*
 * Prompt 1:
 *
 * Write a function called sayHello.
 * When invoked, sayHello should print the string 'hello' with your name, a day of the week, and a Boolean for AM/PM. 
 * Then set a conditional in your function that will return Good Morning or Good Afternoon depending on that variable. 
 */

// function sayHello(name, day, time) {
//   if (time === "am") {
//     console.log(`Good Morning ${name} Today is ${day}`) 
//   } else if (time === "pm") {
//   console.log(`Good Afternoon ${name} Today is ${day}`)
//   }
// }

// sayHello("Mamragbe", "Monday", "pm")

/* Prompt 2

 * Create a function called printMessage. This function should take a parameter
 * called message. When invoked and passed a string, print 'Today's message
 * is:', followed by the message passed in as a parameter.
 
 * Then, create an array of quotes. You can just list the quotes, or you can add other values like the person who said it, and when.
 * Set up a random number function that displays a random quote (and any add'l information you added) each time the file is run
 */

// const messages = ["bye bye bye", "broken road led me straight to you", "when i was a young boy my father took me into the city"]

// function printMessage(messages) {
//   return `Today's message is: ${messages}`
// }
// console.log(messages[Math.floor(Math.random() * messages.length)])

/* Prompt 3
 *
 * Create a function called reverseMessage. This function should take
 * a parameter called message. When invoked and passed a string, print the
 * string in reverse. (hint: look up some ways of doing this.)
 */

// function reverseMessage(message) {
//   var splitMessage = message.split("")
//   var reverseArray = splitMessage.reverse()
//   var joinArray = reverseArray.join("")
//   return joinArray
//   }
//   console.log(reverseMessage("Reverse This Message"))

/*
 * Prompt 4:
 *
 * Create a function called multiply that takes two parameters: a and b. When
 * invoked, multiply a times b. If an argument is not passed in for b, then
 * double a (i.e. multiply it by two).
 *
 * Try doing the same for Addition, Subtraction, Division, and anything involving Square Roots.
 * You may want to save all of these functions in a different file that you can use to create a JS calculator in once we learn DOM manipulation
 
 *If you've got this down, lets take a second and add in the Modulus operator that can tell us if a number is even or odd (or anything else about it)
 */

  // function multiply(a, b = 2){
  //  return a * b
  // }
  // function addition(a, b = 2){
  // return a + b
  // }
  // function subtract(a, b = 2){
  // return a - b
  // }
  // function divide(a, b = 2){
  // return a / b
  // }
  // function square(num){
  // return Math.sqrt(num)
  // }
  // function oddEven(num) {
  // if (num % 2 == 0) {
  // return "even"
  // } else {
  // return "odd"
  // }
  // }
  // console.log(square(3))

/*
 * Prompt 5
 *
 * Write a function that returns an object. The object can be anything.
 * 
 * Then, write a function that returns and logs an array of objects. The array can be of anything. Make it as simple or as complex as you would like
 * Have some fun and try using conditions, random numbers, and other JS tricks to get different objects from the array to log. 
 */

// function personCreator(name, age, hobbies, lovesBooks) {
//   const person = {
//   name: name,
//   age: age,
//   hobbies: hobbies,
//   lovesBooks: lovesBooks,
//   }
//   return person
//   }
//   const mabe = personCreator("Mamragbe", 22, ["cooking", "reading", "laughing"], true)
//   const james = personCreator("James", 30, ["writing", "hiking", "fishing"], false)
//   const ruby = personCreator("Ruby", 22, ["video games", "baking", "sports"], true)

//   function array (arr1, arr2, arr3){
//     return[arr1, arr2, arr3]
//   }
//   console.log(array(mabe, james, ruby))


/*
 * Prompt 6:
 *
 * Write a function that, when called, adds a number passed in as a parameter to
 * the sum variable below. Invoke your method a few times and then print the sum
 */

// /** Starter Code */
// let sum = 0

// /** Your Solution */
// let sum = 0

// function addSum(num){
//   sum = sum + num
//   }
//   console.log(sum)
//   addSum(10)
//   addSum(20)
//   addSum(5)
//   console.log(sum)

/*
 * Prompt 7:
 *
 * Write a function that takes an array of number values and returns the sum.
 * Test it out to make sure it works.
 */

// function returnOfSum(arr){
// let sumOfAll = 0
// for (let i=0; i<arr.length;i++){
// sumOfAll = sumOfAll + arr[i]
// } return sumOfAll
// }
// console.log(returnOfSum([2, 2, 10, 4, 6, 8, 10]))

/* Prompt 8:
 *
 * Write a function that takes a string and logs and returns an array of every word in
 * the string.
 */

// function stringArray (str) {
//   return str.split(" ")
//   }
//   console.log(stringArray("When I was a young boy my father"))

/*
 * Prompt 9:
 *
* convert a function you have already written from an Expression to a Declaration, or vice versa


/** Starter Code */
// function stringArray (str) {
//   return str.split(" ")
//   }

// /** Your Solution */
//   const stringArray = (str) => str.split(" ")


/*
 * Prompt 10:
 *
 * Write a function that takes the add function below as a parameter and invokes
 * it, passing in 2 and 4.
 */

// /** Starter Code */
// function add(a, b) {
//   return a + b
//  }

// /** Your Solution */
// function addFunc(func){
//   return func(2, 4)
//   }
//   console.log(addFunc(add))  


/*
 * Prompt 11:
 *
 * Write a function that returns another function. Have the inner function print
 * the string "hello world"
 */

// function parent () {
//   function child(){
//   console.log("Hello World")
//   } child()
//   }
//   parent()
