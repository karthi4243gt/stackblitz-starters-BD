/***************************************** BD 1.4 - Functions *******************************************/

let express = require("express");
let app = express();

let PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:", PORT);
});

// Create an endpoint that returns a welcome message.
function getWelcomeMessage() {
  return "Welcome to our service!";
}

app.get("/welcome", (request, response) => {
  response.send(getWelcomeMessage());
});

// Create an endpoint that takes a username as a query parameter and returns a greeting message.
function getGreetingMessage(username) {
  return "Hello, " + username + "!";
}

app.get("/greett", (request, response) => {
  let username = request.query.username;
  response.send(getGreetingMessage(username));
});

// Create an endpoint that takes a password as a query parameter and returns if it is strong (length > 15) or weak.
function checkPasswordStrength(password) {
  if (password.length > 15) {
    return "Password is strong";
  } else {
    return "Password is weak";
  }
}

app.get("/check-password", (request, response) => {
  let password = request.query.password;
  response.send(checkPasswordStrength(password));
});

// Create an endpoint that takes two numbers as query parameters and returns their sum.
function getSum(num1, num2) {
  return num1 + num2;
}

app.get("/sum", (request, response) => {
  let num1 = parseFloat(request.query.num1);
  let num2 = parseFloat(request.query.num2);
  response.send(getSum(num1, num2).toString());

  //let result = getSum(num1, num2);
  //response.send(result.toString());
});

//Create an endpoint that takes a username and a boolean isSubscribed indicating subscription status, and returns a message if the user is subscribed or not.
function getSubscriptionStatus(username, isSubscribed) {
  if (isSubscribed === "true") {
    return username + " is subscribed";
  } else {
    return "Please subscribe to my channel";
  }
}

app.get("/subscription-status", (request, response) => {
  let username = request.query.username;
  let isSubscribed = request.query.isSubscribed;
  response.send(getSubscriptionStatus(username, isSubscribed));
});

//Create an endpoint that takes a product price and a discount percentage, and returns the final price after discount.

function getDiscountedPrice(price, discount) {
  return price * (1 - discount / 100);
}

app.get("/discounted-price", (request, response) => {
  let price = parseFloat(request.query.price);
  let discount = parseFloat(request.query.discount);
  response.send(getDiscountedPrice(price, discount).toString());
});

//Create an endpoint that takes a user's age, gender, and name, and returns a personalized greeting message.

function getPersonalizedGreeeting(age, gender, name) {
  return "Hello, " + name + "! You are a " + age + " year old " + gender + ".";
}

app.get("/personalized-greeting", (request, response) => {
  let age = parseFloat(request.query.age);
  let gender = request.query.gender;
  let name = request.query.name;
  response.send(getPersonalizedGreeeting(age, gender, name));
});

//Create an endpoint that takes a product price, discount percentage, and tax rate, and returns the final price after applying discount and tax.

function getFinalPrice(price, discount, tax) {
  return price * (1 - discount / 100) * (1 + tax / 100);
}

app.get("/final-price", (request, response) => {
  let price = parseFloat(request.query.price);
  let discount = parseFloat(request.query.discount);
  let tax = parseFloat(request.query.tax);
  response.send(getFinalPrice(price, discount, tax).toString());
});

//Create an endpoint that takes three fitness activity durations (running, cycling, swimming) and returns the total exercise time.

function getTotalExerciseTime(running, cycling, swimming) {
  return running + cycling + swimming;
}

app.get("/total-exercise-time", (request, response) => {
  let running = parseFloat(request.query.running);
  let cycling = parseFloat(request.query.cycling);
  let swimming = parseFloat(request.query.swimming);
  response.send(getTotalExerciseTime(running, cycling, swimming).toString());
});