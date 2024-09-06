/************************************ BD2.2 HW-1 **************************************/

const express = require("express");
const app = express();

const PORT = 3000;

app.listen(PORT, (req, res) => {
  console.log("Server is running on ",PORT );
});


// Question 1: Write an Express code snippet to filter temperatures above 25 degrees Celsius.

let temperatures = [22, 26, 19, 30, 23, 28, 17, 31];

function filterHighTemperatures(temp){
  return temp > 25;
}

app.get("/high-temperatures", (req, res) => {
  let result = temperatures.filter(temp => filterHighTemperatures(temp));
  res.json(result);
});


// Question 2: Write an Express code snippet to filter prices less than or equal to 100 rupees.

let prices = [80, 120, 95, 150, 60, 110];

function filterLowPrices(price){
  return price <= 100;
}

app.get("/low-prices", (req, res) =>{
  let result = prices.filter(price => filterLowPrices(price));
  res.json(result);
});


// Question 3: Write an Express code snippet to filter product ratings greater than 3.5.

let ratings = [4.2, 3.8, 2.5, 4.7, 3.0, 4.9, 3.6];

function filterHighRatings(rating){
  return rating > 3.5 ;
}

app.get("/high-ratings", (req, res) => {
  let result = ratings.filter(rating => filterHighRatings(rating));
  res.json(result);
});


// Question 4: Write an Express code snippet to filter Indian names longer than 6 characters.

let indianNames = ['Akshay', 'Priyanka', 'Arjun', 'Anushka', 'Rajesh', 'Kavita'];

function filterLongIndianNames(name){
  return name.length > 6;;
}

app.get("/long-indian-names", (req, res) => {
  let result = indianNames.filter(name => filterLongIndianNames(name));
  res.json(result);
});


//Question 5: Write an Express code snippet to filter products cheaper than a certain price.

let productsPrices = [10, 25, 50, 75, 100, 150, 200];

function filterCheaperProducts(price, filterParam){
  return price < filterParam;
}

app.get("/cheaper-products", (req, res) => {
  let filterParam = parseFloat(req.query.filterParam);
  let result = productsPrices.filter(price => filterCheaperProducts(price, filterParam));
  res.json(result);
});