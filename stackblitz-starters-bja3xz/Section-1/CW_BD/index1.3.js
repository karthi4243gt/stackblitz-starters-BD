let express = require("express");
const { request } = require("http");
let app = express();

let PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:", PORT);
});

/***************************************** BD 1.3 - If / else *******************************************/

app.get("/check-number", (request, response) => {
  let number = parseFloat(request.query.number);
  let result = "";
  if(number >= 0){
    result = "positive";
  }
  else{
    result = "negative";
  }
  response.send("Number is "+result);
});


//Endpoint 2 : Check the number is even or odd

app.get("/check-even-odd", (request, response) => {
  let number = parseInt(request.query.number);
  let result = "";
  if(number % 2 == 0){
    result = "even";
  }
  else {
    result = "odd";
  }
  response.send("Number is "+result);
});


//Endpoint 3 : Check whether the user is logged in or not

app.get("/check-log-in", (request, response) => {
  let isLoggedIn = request.query.isLoggedIn;
  let result = "";

  if(isLoggedIn == "true"){
    result = "logged in";
  }
  else {
    result = "logged out";
  }
  response.send("User is "+result);
});


//Endpoint 4 : check if a user is Eligible for the a Discount

app.get("/check-discount", (request, response) => {
  let age = parseInt(request.query.age);
  let result = "";
  if(age > 65){
    result = "User is eligible for a Discount";
  }
  else{
    result = "User is not eligible for a Discount";
  }
  response.send(result);
});


//Endpoint 5 : check if a number is positive, negative, or zero

app.get("/check-number-type", (request, response) => {
  let number = parseInt(request.query.number);
  let result = "";
  if(number > 0){
    result = "positive";
  }
  else if(number < 0){
    result = "negative";
  }
  else{
    result = "zero";
  }
  response.send("Number is "+result);
});

//Endpoint 6 : check if a temperature is cold, warm or hot

app.get("/check-temperature", (request, response) => {
  let temperature = parseInt(request.query.temperature);
  let result = "";

  if(temperature < 15) {
    result = "cold";
  }
  else if (temperature >= 15 && temperature <= 25){
    result = "warm";
  }
  else {
    result = "hot";
  }
  response.send("Temperature is "+result);
});


//Endpoint 7 : check if a user's Activity level is low, moderate or high

app.get("/check-activity-level", (request, response) => {
  let steps = parseInt(request.query.steps);
  let result = "";

  if(steps < 5000) {
    result = "low";
  }
  else if(steps >= 5000 && steps <= 10000) {
    result = "moderate";
  }
  else{
    result = "high";
  }
  response.send("Activity level is "+result);
});

//Endpoint 8 : check if a social media post has Low, Medium, or High Enagagement

app.get("/check-engagement", (request, response) => {
  let likes = parseInt(request.query.likes;
  let result = "";

  if(likes < 100){
    result = "low";
  }
  else if (likes >= 100 && likes <= 500){
    result = "medium";
  }
  else{
    result = "high";
  }
  response.send("Engagement level is "+result);
});