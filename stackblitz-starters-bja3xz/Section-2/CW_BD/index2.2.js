const express = require("express");
const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Question 1: Return Only the Even Numbers

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterEvenNumbers(num){
  //return numbers.filter(number => number % 2 === 0);
  return num % 2 === 0;
}

app.get("/even-numbers", (req, res) => {
  let result = numbers.filter(filterEvenNumbers(num));
  console.log(result);
  res.json(result);
});


// Question 2: Return Only the Ages Greater Than 18

let Ages = [10, 20, 30, 15, 17, 25];

function filterAges(age){
  return age > 18;
}

app.get("/adult-ages", (req, res) => {
  let result = Ages.filter(age => filterAges(age));
  res.send(result);
});


// Question 3: Return Only the Words Longer Than 5 Characters

let words = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape'];

function filterLongWords(word){
  return word.length > 5 ;
}

app.get("/long-words", (req, res) => {
  let result = words.filter(word => filterLongWords(word));
  res.json(result);
});


// Question 4: Return Only the Files Smaller Than a Certain Size

let filesSize = [50, 200, 75, 120, 30, 90, 150];

function filterSmallFiles(size, filterParam){
  return size < filterParam;
}

app.get("/small-files", (req, res) => {
  let filterParam = parseFloat(req.query.filterParam);
  let result = filesSize.filter(size => filterSmallFiles(size, filterParam));
  res.json(result);
});