let express = require("express");
let app = express();

let PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
})

/********************************************* Home work 2 **********************************************/

//Question 1: Given username generate a GitHub profile URL for the user
function generateProfileUrl(username) {
  let result = "https://github.com/" + username;
  return result;
}

app.get("/github-profile", (request, response) => {
  let username = request.query.username;
  response.send(generateProfileUrl(username));
});

//Question 2 :
function generateCertificate(firstName, lastName, courseName) {
  let result =
    "This certification is awarded to " +
    firstName +
    " " +
    lastName +
    " for completing course" +
    courseName;
  return result;
}

app.get("/certificate", (request, response) => {
  let firstName = request.query.firstName;
  let lastName = request.query.lastName;
  let courseName = request.query.courseName;
  response.send(generateCertificate(firstName, lastName, courseName));
});

//Question 3: Create an endpoint that takes maths, science & english as query parameters and returns grade in percentage

function calculateGrade(maths, science, english) {
  let gradeInPercentage = (maths + science + english) / 3;
  let result = "Your grade in percentage is " + gradeInPercentage + "!";
  return result;
}

app.get("/grade", (request, response) => {
  let maths = parseFloat(request.query.maths);
  let science = parseFloat(request.query.science);
  let english = parseFloat(request.query.english);
  response.send(calculateGrade(maths, science, english));
});

// Question 4: Create an endpoint that takes billAmount & numberOfFriends as query parameters and returns the result

function splitBill(billAmount, numberOfFriends) {
  let splitBill = billAmount / numberOfFriends;
  let result =
    "Result: Each friend owes Rs. " + splitBill + " against the bill";
  return result;
}

app.get("/split-bill", (request, response) => {
  let billAmount = parseFloat(request.query.billAmount);
  let numberOfFriends = parseFloat(request.query.numberOfFriends);
  response.send(splitBill(billAmount, numberOfFriends).toString());
});

//Question 5: Create an endpoint that takes a totalHours & hourlyWage and returns the monthly salary.

function calculateSalary(totalHours, hourlyWage) {
  let total = totalHours * hourlyWage;
  let result = "Result: Your monthly salary is ₹" + total;
  return result;
}

app.get("/monthly-salary", (request, response) => {
  let totalHours = parseFloat(request.query.totalHours);
  let hourlyWage = parseFloat(request.query.hourlyWage);
  response.send(calculateSalary(totalHours, hourlyWage).toString());
});