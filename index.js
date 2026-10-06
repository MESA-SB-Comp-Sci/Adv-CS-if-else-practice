/**
 * Q1: Make 10! 
 * 
 * You will be given a number from 1-10; 
 * Your job is to log how much needs to be added to the current number to make 10!
 * 
 * Check if, when we add 1 to our current number, we will get 10 
 * Check if, when we add 2 to our current number, we will get 10
 * If both are not true, tell the user how much is missing to make 10. 
 * 
 * P: given a number from 1-10 determine how many more is needed to make 10
 * E: 
 * Input: 2 
 * output: 8
 * 
 * Input: 11
 * Output: -1; This number is MORE than 10!
 * D: Input: Num Output: Num or Error message
 * A: 
 * Initialize a variable with a random number 
 * Check if our randNum is > 10 
 *    log --> This num is MORE than 10!
 * Check if randNum + 1 === 10 // check if randNum === 9 
 *    log --> You only need 1 more to make 10 
 * Check if randNum + 2 === 10 // check if randNum === 8 
 *    log --> You only need 2 more to make 10
 * else 
 *    log --> You need {10-randNum} amount to make 10  
 */

let random1to10 = Math.floor(Math.random() * 20);
console.log(`Q1: Your random number is: ${random1to10}`)

if(random1to10 > 10){
  console.log("YOU HAVE MORE THAN 10!")
} else if(random1to10 === 9){
  console.log("YOU NEED 1 MORE TO MAKE 10")
} else if(random1to10 === 8){
  console.log("YOU NEED 2 MORE TO MAKE 10!")
} else {
  console.log(`You need ${10-random1to10} to make 10.`)
}

/**
 * Q2: Odd or Even or 0! 
 * 
 * You will be given a random number; 
 * Your job is to tell the user if the number given is odd, even, or 0! (use console.log)
 *
 * P: given a number from 1-10 determine how many more is needed to make 10
 * E: 
 * Input: 2 
 * output: 8
 * 
 * Input: 11
 * Output: -1; This number is MORE than 10!
 * D: Input: Num Output: Num or Error message
 * A: 
 * Initialize a variable with a random number 
 * Check if our randNum is > 10 
 *    log --> This num is MORE than 10!
 * 
 * C: Write the code outside of this comment!
 */

let random1to100 = Math.floor(Math.random() * 100);
console.log(`Your random number is: ${random1to100}`);

/**
 * Q3: Leap Year Checker! 
 * Determine if a given year is a leap year. 
 * A year is a leap year if it is divisible by 4 but not 100, 
 * However, century years must also be divisible by 400
 * 800  --> leap year
 * 2020 --> leap year 
 * 2023 --> Not a leap year
 * P: 
 * E: 
 * D: 
 * A: 
 * C: Write the code outside of this comment!
 */

let random1to2026 = Math.floor(Math.random() * 2026);

