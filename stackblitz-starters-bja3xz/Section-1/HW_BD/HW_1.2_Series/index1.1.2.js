let express = require("express");
const { request } = require("http");
let app = express();
let PORT = 3000;

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:", PORT);
});

/***************************************** BD 1.1 - Strings *******************************************/

/******************************************* Home work 2 ********************************************/

//Endpoint 1 : Send a custom commit message
app.get("/custom-commit", (request, response) => {
  let type = request.query.type;
  let message = request.query.message;
  let commit = type + ": " + message;
  response.send(commit);
});

//Endpoint 2 : Genereate certificate
app.get("/certificate", (request, response) => {
  let firstName = request.query.firstName;
  let lastName = request.query.lastName;
  let courseName = request.query.courseName;
  let certificate =
    "This certification is awarded to " +
    firstName +
    " " +
    lastName +
    " for completing the course " +
    courseName;
  response.send(certificate);
});

//Endpoint 3 : Configure out-of-office autoreply
app.get("/autoreply", (request, response) => {
  let startMonth = request.query.startMonth;
  let endMonth = request.query.endMonth;
  let messasge =
    "Dear customer, thank you for reaching out to me. Unfortunately, I'm out of office from " +
    startMonth +
    " till " +
    endMonth +
    ". Your enquiry will be resolved by another colleague.";
  response.send(messasge);
});

//Endpoint 4 : Send a secure URL
app.get("/secureurl", (request, response) => {
  let domain = request.query.domain;
  let result = "https://" + domain;
  response.send(result);
});

//Endpoint 5 : Send a verification OTP
app.get("/sendotp", (request, response) => {
  let otpCode = request.query.otpCode;
  let message =
    "Your OTP for account verification is " +
    otpCode +
    ". Do not share this with anyone";
  response.send(message);
});

//Endpoint 6 : Send a welcome mail to new user
app.get("/welcome", (request, response) => {
  let firstName = request.query.firstName;
  let email = request.query.email;
  let message =
    "Hey " +
    firstName +
    ". We're excited to have you here, we'll send future notifications to your registered mail (" +
    email +
    ")";
  response.send(message);
});

//Endpoint 7 : Generate Github profile URL
app.get("/github-profile", (request, response) => {
  let userName = request.query.userName;
  let result = "https://github.com/" + userName;
  response.send(result);
});

//Endpoint 8 : Convert text into CSV row format
app.get("/text-to-csv", (request, response) => {
  let id = request.query.id;
  let email = request.query.email;
  let rollNumber = request.query.rollNumber;
  let message = id + ", " + email + ", " + rollNumber;
  response.send(message);
});