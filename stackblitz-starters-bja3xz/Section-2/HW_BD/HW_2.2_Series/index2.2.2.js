/************************************ BD2.2 HW-2 **************************************/

const express = require("express");
const app = express();

const PORT = 3000;

app.listen(PORT, (req, res) => {
  console.log("Server is running on ",PORT );
});

// Exercise 1: Filter Prime Numbers

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function isPrime(num){
  if(num <= 1) 
    return false;
  for(let i = 2 ; i < num ; i++)
  {
    if(num % i === 0) {
      return false;
    }
  }
  return true;
}

function filterPrimeNumbers(num){
  return isPrime(num);
}

app.get("/prime-numbers", (req, res) => {
  let result = numbers.filter(num => filterPrimeNumbers(num));
  res.json(result);
});


// Exercise 2: Filter Positive Numbers

let Numbers = [-10, -5, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

function filterPositiveNumbers(num){
  return num > 0;
}

app.get("/positive-numbers", (req, res) => {
  let result = Numbers.filter(num => filterPositiveNumbers(num));
  res.json(result);
});


// Exercise 3: Filter Negative Numbers

let numbers1 = [-10, -5, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

function filterNegativeNumbers(num){
  return num < 0;
}

app.get("/negative-numbers", (req, res) => {
  let result = numbers1.filter(num => filterNegativeNumbers(num));
  res.json(result);
});


// Exercise 4: Filter Odd Numbers

let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterOddNumbers(num){
  return num % 2 !== 0;
}

app.get("/odd-numbers", (req, res) => {
  let result = numbers2.filter(num => filterOddNumbers(num));
  res.json(result);
});


// Exercise 5: Filter Numbers Greater Than a Given Value
// Here I'm using the number2 array.

function filterNumbersGreaterThan(num, value){
  return num > value;
}

app.get("/numbers-greater-than", (req, res) => {
  let value = parseFloat(req.query.value);
  let result = numbers2.filter(num => filterNumbersGreaterThan(num, value));
  res.json(result);
});


// Exercise 6: Filter Numbers Less Than a Given Value
// Here I'm using the number2 array.

function filterNumbersLessThan(num, value){
  return num < value;
}

app.get("/numbers-less-than", (req, res) => {
  let value = parseFloat(req.query.value);
  let result = numbers2.filter(num => filterNumbersLessThan(num, value));
  res.json(result);
})
