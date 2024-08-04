// Write a function called sum that finds the sum from 1 to a number

function sum(num){
    let totalSum = 0;
    for(let i=1;i<=num;i++){
        totalSum = totalSum + i;
    }
    return totalSum;
}
let number = 10;
let ans = sum(number);
console.log(`The total sum from 1 to ${number} is ${ans}`);