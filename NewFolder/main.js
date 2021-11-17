console.log('The world is running!');

// task1

let myFavNumber = 80;

if (myFavNumber === 5) {
  console.log('My favourite number is 5 too!');
}

//task2

let myName = prompt('What is your name?');

if (myName === 'Ben') {
  console.log("That's my name too!");
} else {
  console.log(`${myName} !? That's a silly name...`);
}

//task3
let weatherType = 'raining';

if (weatherType === 'raining') {
  console.log('Take an umbrella!');
} else {
  if (weatherType === 'sunny') {
    console.log("Don't forget suncream!");
  } else {
    console.log('Must be a normal, grey, non-descript day!');
  }
}

// task 3 refactor
// weatherType === 'raining' ? console.log('take and umbrella!') : weatherType === 'sunny' ? console.log("Don't forget suncream!") : console.log('Must be a normal, grey, non-descript day!');

//function declaration with two parameters
// function greet(name, age) {
//   return `hello ${name} I cant beleive you are ${age} years old`;
// }
// let inputName = prompt('name');
// let greeting = greet(inputName, 32);

// console.log(greeting);
