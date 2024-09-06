/***************************************** BD 1.3 - If / else
 *******************************************/

/*** Disclaimer : if the output is display in this index1.3.js file, then please try to execute the code present in the "index.js" file. ***/

//Endpoint 1 : Calculate a person’s BMI category given weight (kilograms) and height(meters)
app.get("/check-bmi", (request, response) => {
  let weight = parseFloat(request.query.weight);
  let height = parseFloat(request.query.height);
  let bmi = weight / (height * height);
  let result;

  if (bmi < 18.5) {
    result = "underweight";
  } else if (bmi < 24.9) {
    result = "normal weight";
  } else if (bmi < 29.9) {
    result = "overweight";
  } else {
    result = "obese";
  }
  response.send("BMI category is " + result);
});

//Endpoint 2 : Calculate a student’s academic performance based on their grade

app.get("/check-performance", (request, response) => {
  let grade = parseFloat(request.query.grade);
  let result;

  if (grade >= 90) {
    result = "excellent";
  } else if (grade >= 75) {
    result = "good";
  } else if (grade >= 50) {
    result = "average";
  } else {
    result = "poor";
  }

  response.send("Academic performance is " + result);
});

//Endpoint 3 : Calculate a person’s age group given their age

app.get("/check-age-group", (request, response) => {
  let age = parseFloat(request.query.age);
  let result;

  if (age <= 12) {
    result = "child";
  } else if (age <= 17) {
    result = "teenager";
  } else if (age <= 64) {
    result = "adult";
  } else {
    result = "senior";
  }

  response.send("Age group is " + result);
});

//Endpoint 4 : Calculate a person’s loan eligibility given creditScore

app.get("/check-loan-eligibility", (request, response) => {
  let creditScore = parseFloat(request.query.creditScore);
  let result;

  if (creditScore >= 750) {
    result = "high";
  } else if (creditScore >= 650) {
    result = "medium";
  } else {
    result = "low";
  }
  response.send("Loan eligibility is " + result);
});

//Endpoint 5 : Given a person’s income calculate the tax bracket they fall in
app.get("/check-tax-bracket", (request, response) => {
  let income = parseFloat(request.query.income);
  let result;

  if (income <= 500000) {
    result = "10% tax bracket";
  } else if (income <= 1000000) {
    result = "15% tax bracket";
  } else if (income <= 1500000) {
    result = "20% tax bracket";
  } else {
    result = "30% tax bracket";
  }
  response.send("You fall under the " + result);
});
