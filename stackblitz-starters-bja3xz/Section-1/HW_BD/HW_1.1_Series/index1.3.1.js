let express = require("express");
let app = express();

let PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:", PORT);
});

/***************************************** BD 1.3 - If / else
 *******************************************/

/*** Disclaimer : if the output is display in this index1.3.js file, then please try to execute the code present in the "index.js" file. ***/

//Endpoint 1 : check if a number si whoole number or not
app.get("/check-whole-number", (request, response) => {
  let number = parseFloat(request.query.number);
  let result;

  if(number >= 0){
    result = "whole number";
  }
  else{
    result = "not whole number";
  }
  response.send("Number is "+result);
});


//Endpoint 2 : check if two numbers are equal or not
app.get("/check-equal", (request, response) => {
  let num1 = parseFloat(request.query.num1);
  let num2 = parseFloat(request.query.num2);
  let result;

  if(num1 === num2){
    result = "equal";
  }
  else{
    result = "not equal";
  }

  response.send("Numbers are "+result);
});


//Endpoint 3 : check is a user is active (based on a boolean value)
app.get("/check-active", (request, response) => {
  let isActive = request.query.isActive;
  let result;

  if(isActive === "true"){
    result = "Active";
  }
  else{
    result = "not Active";
  }

  response.send("User is "+result);
});


//Endpoint 4 ; check if a user is eligible for a discount (based on cost of goods being o ver 1000)
app.get("/check-discount", (request, response) => {
  let cost = parseFloat(request.query.cost);
  let result;

  if (cost >= 1000){
    result = "User is eligible for a discount";
  }
  else{
    result = "User is not eligible for a discount";
  }

  response.send(result);
});


//Endpoint 5 : check if a person is fresher, experienced or non-working
app.get("/check-experience", (request, response) => {
  let workExperience = parseFloat(request.query.workExperience);
  let result;

  if(workExperience > 0){
    result = "experienced";
  }
  else if (workExperience < 0){
    result = "non-working";
  }
  else{
    result = "fresher";
  }
  response.send("Person is "+result);
});


//Endpoint 6 : check if a result is Grade A (above 80), B (between 50 to 80) or Fail (below 50)
app.get("/check-result", (request, response) => {
  let result = parseFloat(request.query.result);
  let grade;

  if(result >= 80){
    grade = 'A';
  }
  else if(result > 50 && result < 80){
    grade = 'B';
  }
  else{
    grade = 'Fail';
  }

  response.send("The grade is "+grade);
});


//Endpoint 7 : check if a student's attendance is low, moderate, or high  (based on the n umber of classes)
app.get("/check-attendance", (request, response) => {
  let attendance = parseInt(request.query.attendance);
  let result;

  if(attendance < 50){
    result = 'low';
  }
  else if(attendance < 90){
    result = 'moderate';
  }
  else{
    result = 'high';
  }

  response.send("Attendance is "+result);
});


//Endpoint 8 : check if a restaurant has low, medium, or high rating (based on the number of stars)
app.get("/check-rating", (request, response) => {
  let stars = parseFloat(request.query.stars);
  let result ;

  if(stars < 3){
    result = 'low';
  }
  else if (stars <= 4){
    result = 'moderate';
  }
  else{
    result = 'high';
  }

  response.send("Restaurant rating is "+result);
});