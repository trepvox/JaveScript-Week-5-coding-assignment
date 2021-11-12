// //1.     Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93. 
// var ages = [3, 9, 23, 64, 2, 8, 28, 93];
var ages = [];
ages.push(3);
ages.push(9);
ages.push(23);
ages.push(64);
ages.push(2);
ages.push(8);
ages.push(28);
ages.push(93);
console.log(ages);


// //1a.    Programmatically subtract the value of the first element in the array from the value in the last element of 
// // the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not 
// // allowed). Print the result to the console. 
let lastIndex = ages.length-1;
let firstIndex = 0;

console.log(ages[lastIndex] - ages[firstIndex]);
// equals 90


// //1b.     Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of 
// //  different lengths). 
var ages = [3, 9, 23, 64, 2, 8, 28, 93];
ages.push(17);
console.log(ages);

let lastIndex = ages.length - 1;
let firstIndex = 0;

console.log(ages[lastIndex] - ages[firstIndex]);
//now = 14


// //1c.     Use a loop to iterate through the array and calculate the average age. Print the result to the console. 
// var average = ages.reduce((x, y) => x + y, 0) / ages.length;
// console.log(average);
var sum = 0;
var count = ages.length;

for (i = 0; i < count; i++) {
     sum += ages[i];
     console.log(sum);
}
var avg = sum/ages.length;
console.log(avg);


// //2.    Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’. 
var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];


// //2a.   Use a loop to iterate through the array and calculate the average number of letters per name. Print the 
// //      result to the console. 
var sum = 0;
for (i = 0; i < names.length; i++) {
    sum += names[i].length;
    console.log(sum);
}

// //2b.   Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, 
// //      and print the result to the console. 
var sum = " ";
for (i = 0; i < names.length; i++) {
    var collection = sum += (names[i] + " ");
}
console.log(collection);

// //5.    Create a new array called nameLengths. Write a loop to iterate over the previously created names array and
// //      add the length of each name to the nameLengths array. 
let nameLengths = names.map(function(element) { 
    return element.length;
});
console.log(nameLengths);


// //6.    Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
// //      Print the result to the console. 
var sum = 0;
var count = nameLengths.length;

for (i = 0; i < count; i++) {
     sum += nameLengths[i];         
}
console.log(sum);


// //7.    Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to 
// //      itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to 
// //      return ‘HelloHelloHello’). 
function conCartening (word, n) {
    return word.repeat(n);
}
console.log(conCartening);


// //8.    Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name 
// //      should be the first and the last name separated by a space). 
function fullName(firstName, lastName) {
    return (firstName + " " + lastName)
}

// //9.    Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array
// //      is greater than 100. 
function arr () {
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sum > 100) {
            return true;
        } 
        else {
            return false;
        }
    }
}

// //10.    Write a function that takes an array of numbers and returns the average of all the elements in the array. 
function arrAve () {
    sum1 = 0;
    for (let i = 0; i < arrAve.length; i++) {
        sum1 += arrAve[i];
        return (sum1/arrAve.length);
    } 
}
// //11.    Write a function that takes two arrays of numbers and returns true if the average of the 
//          elements in the first array is greater than the average of the elements in the second array. 
function junktion () {
    x = sumXArray/xArray.length;
    m = sumMArray/mArray.length;
    if (x > m) {
        return (true);
    } else {
        return (false);
    }
}


// //12.    Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and 
// //       returns true if it is hot outside and if moneyInPocket is greater than 10.50. 
function willBuyDrink () {
    isHotOutside = true;
    moneyInPocket  = 17.01;
    if (isHotOutside = true && moneyInPocket > 10.50) {
        return true;
    } else {
        return false;
    }
}


// //13.    Create a function of your own that solves a problem. In comments, write what the function does and 
// //       why you created it. 
function whatsForDinner () {
    moneyInWallet = 25
    if (moneyInWallet > 45) {
        return "We're going out to eat!";
    } else if (moneyInWallet < 45 && moneyInWallet > 20) {
        return "We've got enough for pizza tonight";
    } else {
        return "PB & J sandwiches again...";
    }
} console.log(whatsForDinner());

// This code helps break down what we can get for dinner tonight and makes the choice easier to 
// celebrate completing the assignment assuming we have enough money to do so.