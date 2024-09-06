/********************************************* BD 1.5 - Assignment_2 **********************************************/

/***************************** Stock Portfolio Assignment
 ***********************/

/**** If this index file is not working, then use the index file which is loacated outside the folder, which contains all the CW programs ****/

let express = require("express");
let cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to Stock portfolio analysis API!");
});

//Endpoint 1: Calculate the Returns of the Stocks added

function calculateReturns(boughtAt, marketPrice, quantity) {
  let result = (marketPrice - boughtAt) * quantity;
  return result;
}

app.get("/calculate-returns", (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = parseFloat(req.query.quantity);
  res.send(calculateReturns(boughtAt, marketPrice, quantity).toString());
}); 

// Endpoint 2: Calculate the Total Returns

function totalReturns(stock1, stock2, stock3, stock4) {
  let result = stock1 + stock2 + stock3 + stock4;
  return result;
}

app.get("/total-returns", (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  res.send(totalReturns(stock1, stock2, stock3, stock4).toString());
});

// Endpoint 3: Calculate the Return Percentage

function returnPercentage(boughtAt, returns) {
  let result = (returns / boughtAt) * 100;
  return result;
}

app.get("/calculate-return-percentage", (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);
  res.send(returnPercentage(boughtAt, returns).toString());
});

// Endpoint 4: Calculate the Total Return Percentage

function totalReturnPercentage(stock1, stock2, stock3, stock4) {
  let result = stock1 + stock2 + stock3 + stock4;
  return result;
}

app.get("/total-return-percentage", (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  res.send(totalReturnPercentage(stock1, stock2, stock3, stock4).toString());
});

// Endpoint 5: Identify the Status of Stocks based on their Return Value

function stockStatus(returnPercentage) {
  if (returnPercentage > 0) {
    return "profit";
  } else {
    return "loss";
  }
}

app.get("/status", (req, res) => {
  let returnPercentage = parseFloat(req.query.returnPercentage);
  res.send(stockStatus(returnPercentage).toString());
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
