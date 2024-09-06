/********************************************* BD 1.5 - Assignment **********************************************/

/************************************ Flip Deal Application *************************************/

/**** If this index file is not working, then use the index file which is loacated outside the folder, which contains all the CW programs ****/

let express = require("express");
let app = express();

let PORT = 3000;
app.listen(PORT, () =>{
  console.log("Server is running on port " + PORT);
});

//server-side values
let taxRate = 5;
let discountPercentage = 10;
let loyaltyRate = 2;

// Endpoint 1: Calculate the total price of items in the cart

app.get("/cart-total", (request, response) => {
  let newItemPrice = parseFloat(request.query.newItemPrice);
  let cartTotal = parseFloat(request.query.cartTotal);
  let result = newItemPrice + cartTotal;
  response.send(result.toString());
});

// Endpoint 2 : Apply a discount based on membership status

function memberShipDiscountPrice(cartTotal, isMember) {
  if (isMember === "true") {
    return cartTotal * (1 - discountPercentage / 100);
  } else {
    return cartTotal;
  }
}

app.get("/membership-discount", (request, response) => {
  let cartTotal = parseFloat(request.query.cartTotal);
  let isMember = request.query.isMember;
  response.send(memberShipDiscountPrice(cartTotal, isMember).toString());
});

// Endpoint 3 : Calculate tax on the cart total

function taxOnCartTotal(cartTotal, taxRate) {
  let result = cartTotal * (taxRate / 100);
  return result;
}

app.get("/calculate-tax", (request, response) => {
  let cartTotal = parseFloat(request.query.cartTotal);
  response.send(taxOnCartTotal(cartTotal, taxRate).toString());
});

// Endpoint 4 : Estimate delivery time based on shipping method

function estimateDeliveryTime(shippingMethod, distance){
  if(shippingMethod === "standard"){
    return distance / 50;
  }else if(shippingMethod === "express"){
    return distance / 100;
  }else{
    return distance;
  }
}

app.get("/estimate-delivery", (request, response) => {
  let shippingMethod = request.query.shippingMethod;
  let distance = parseFloat(request.query.distance);
  response.send(estimateDeliveryTime(shippingMethod, distance).toString());
});

// Endpoint 5 : Calculate the shipping cost based on weight and distance

function shippingCost(weight, distance) {
  let result = weight * distance * 0.1;
  return result;
}

app.get("/shipping-cost", (request, response) => {
  let weight = parseFloat(request.query.weight);
  let distance = parseFloat(request.query.distance);
  response.send(shippingCost(weight, distance).toString());
});

// Endpoint 6 : Calculate loyalty points earned from a purchase

function loyaltyPoints(purchaseAmount, loyaltyRate){
  let result = purchaseAmount * loyaltyRate;
  return result;
}

app.get("/loyalty-points", (request, response) => {
  let purchaseAmount = parseFloat(request.query.purchaseAmount);
  response.send(loyaltyPoints(purchaseAmount, loyaltyRate).toString());
});


/**************************************** BD2.2 HW-1 ****************************************/


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