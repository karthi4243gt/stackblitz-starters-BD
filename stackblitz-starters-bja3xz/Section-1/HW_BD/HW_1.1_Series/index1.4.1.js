/***************************************** BD 1.4 - Functions
 *******************************************/
/******************************************* Home work 1 ********************************************/

let express = require("express");
const { request } = require("http");
let app = express();

let PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});


//Create an endpoint that returns a welcome message to a student who wants to learn functions.
function getWelcomeMessage() {
  return "We will now learn functions!";
}

app.get("/welcome", (request, response) => {
  response.send(getWelcomeMessage());
});


//Create an endpoint that takes a username as a query parameter and returns a greeting message.
function getGreetingMessage(username) {
  return "Hey, " + username + "! Are you ready to learn functions with us?";
}

app.get("/greett", (request, response) => {
  let username = request.query.username;
  response.send(getGreetingMessage(username));
});

//Create an endpoint that takes the number of yearsOfExp in functions as a query parameter and returns a message indicating the person's experience.
function checkYearesOfExp(yearsOfExp){
  if(yearsOfExp > 0){
    return "You have some experience with functions. Great!";
  }
   else{
     return "No worries. You will start writing functions in no time!";
   }
}

app.get("/message", (request, response) => {
  let yearsOfExp = request.query.yearsOfExp;
  response.send(checkYearesOfExp(yearsOfExp));
});

//Create an endpoint that takes the number of days and hours a student can dedicate to learn functions per week and returns the total hours available per week.
function getTime(days, hours){
  return days * hours;
}

app.get("/hours", (request, response) => {
  let days = request.query.days;
  let hours = request.query.hours;
  response.send(getTime(days, hours));
});

//Create an endpoint that takes a username and a boolean hasCompleted indicating module completion status, and returns a message indicating if the student has completed the modules or not.
function getModuleCompletion(username, hasCompleted){
  if(hasCompleted === "true"){
    return username + " has completed the modules";
  }
  else{
    return username + " has not completed the modules";
  }
}

app.get("/module-completion-status", (request, response) => {
  let username = request.query.username;
  let hasCompleted = request.query.hasCompleted;
  response.send(getModuleCompletion(username, hasCompleted));
});

//Create an endpoint that takes a student's city and name, and returns a personalized greeting message.
function getPersonalizedGreeting(name, city){
  return "Het, " + name + "! What's famous about " + city + "?";
}

app.get("/personalized-greeting", (request, response) => {
  let name = request.query.name;
  let city = request.query.city;
  response.send(getPersonalizedGreeting(name, city))
});

//Create an endpoint that takes a student's birthyear and returns the age.
function findAge(birthyear){
  return 2024 - birthyear;
}

app.get("/find-age", (request, response) => {
  let birthyear = parseFloat(request.query.birthyear);
  response.send(findAge(birthyear).toString());
});

//Create an endpoint that takes the number of days per week and hours per day a student can dedicate to learning functions and returns whether it is sufficient (>= 30 hours per week) or not.
function findRequiredTime(days, hours){
  let time = days * hours;
  if(time >= 30) {
    return "The time being dedicated is sufficient for learning functions";
  }
  else{
    return "The time being dedicated is not sufficient for learning functions";
  }
}

app.get("/is-time-sufficient", (request, response) => {
  let days = parseFloat(request.query.days);
  let hours = parseFloat(request.query.hours);
  response.send(findRequiredTime(days, hours).toString());
});