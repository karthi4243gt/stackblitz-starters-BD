/***************************************** BD 1.2 - Operators
 *******************************************/
/******************************************* Home work 1 ********************************************/

/*** Disclaimer : if the output is display in this index1.3.js file, then please try to execute the code present in the "index.js" file. ***/

let express = require("express");
let app = express();

let PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:", PORT);
});

//Endpoint 1 : calculate the total marks earned in two subjects
app.get("/total-marks", (request, response) => {
  let marks1 = parseFloat(request.query.marks1);
  let marks2 = parseFloat(request.query.marks2);
  let totalMarks = marks1 + marks2;
  response.send(totalMarks.toString());
});

//Endpoint 2 : calculate the total weight of items in a shipment
app.get("/total-weight", (request, response) => {
  let weight1 = parseFloat(request.query.weight1);
  let weight2 = parseFloat(request.query.weight2);
  let weight3 = parseFloat(request.query.weight3);
  let totalWeight = weight1 + weight2 + weight3;
  response.send(totalWeight.toString());
});

//Endpoint 3 : calculate the monthly salary given annual salary
app.get("/monthly-salary", (request, response) => {
  let annualSalary = parseFloat(request.query.annualSalary);
  let monthlySalary = annualSalary / 12;
  response.send(monthlySalary.toString());
});

//Endpoint 4 : calculate the total number of pages read given pages per day and number of days
app.get("/total-pages", (request, response) => {
  let pagesPerDay = parseFloat(request.query.pagesPerDay);
  let days = parseFloat(request.query.days);
  let totalPages = pagesPerDay * days;
  response.send(totalPages.toString());
});

//Endpoint 5 : calculate the conversion from one currency to another given the exchange rate
app.get("/currency-conversion", (request, response) => {
  let amount = parseFloat(request.query.amount);
  let exchangeRate = parseFloat(request.query.exchangeRate);
  let convertedAmount = amount * exchangeRate;
  response.send(convertedAmount.toString());
});

//Endpoint 6 : calculate the average sales of a product, given the sales on 3 days
app.get("/average-sales", (request, response) => {
  let sales1 = parseFloat(request.query.sales1);
  let sales2 = parseFloat(request.query.sales2);
  let sales3 = parseFloat(request.query.sales3);
  let avgSales = (sales1 + sales2 + sales3) / 3;
  response.send(avgSales.toString());
});