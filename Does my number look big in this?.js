// Defines the narcissistic variable
let narcissistic = (num) => {
  //loops through the num, multiplying m by 10 each time to mark the decimil place. 
  //Count is increased by 1 each loop until num/m is greater than num. Count will hold the number of digits
  // in num.
  let m = 1, count = 0; // initializes two variable 
   while(num / m > 1){ 
      m *= 10;
      count++; 
   };
  // following code checks if given number 'num' is a narcissistic number
  let sum = 0, temp = num;
   while(temp){ // each loop moves through the digits, once there are no more digits, temp = 0 (falsy), halting the loop. 
      sum += Math.pow(temp % 10, count); 
     //Math.pow is used to raise a base number to the power of exponent. temp = base, count = exponent.
     //% in the Math.pow function is stating temp/10 which determines the last digit. 
      temp = Math.floor(temp / 10); 
     //removes last digit from temp
   };
   return sum === num;
 };

console.log(narcissistic(153));
console.log(narcissistic(1634));
console.log(narcissistic(1433));
console.log(narcissistic(342));
