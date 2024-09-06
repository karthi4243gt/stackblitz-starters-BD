/***************************************** BD 1.1 - Strings ******************************************/

/******************************************* Home work 1 ********************************************/

let express = require("express");
let app = express();

let PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:", PORT);
});


//Endpoint 1 : Return a name in lowercase
app.get("/BD_HW_1/whisper", (request, response) => {
  let name = request.query.name;
  let lowercase_name = name.toLowerCase();
  response.send(lowercase_name);
});

//Endpoint 2 : Concatenate companyName and productName to return full productName
app.get("/full-product-name", (request, response) => {
  let companyName = request.query.companyName;
  let productName = request.query.productName;
  let fullProductName = companyName + " " + productName;
  response.send(fullProductName);
});

//Endpoint 3 : Concatenate month and year to return a formatted date
app.get("/date", (request, response) => {
  let month = request.query.month;
  let year = request.query.year;
  let formattedDate = month + "/" + year;
  response.send(formattedDate);
});

//Endpoint 4 : Return a greeting with the given home city
app.get("/greet", (request, response) => {
  let city = request.query.city;
  let greeting = "You live in " + city;
  response.send(greeting);
});

//Endpoint 5 : Return a formatted capital and country
app.get("/capital", (request, response) => {
  let capital = request.query.capital;
  let country = request.query.country;
  let countryCapital = capital + " is the capital of " + country;
  response.send(countryCapital);
});

//Endpoint 6 : Return a formatted email
app.get("/email", (request, response) => {
  let firstName = request.query.firstName;
  let lastName = request.query.lastName;
  let domain = request.query.domain;
  let email = firstName + "." + lastName + "@" + domain;
  response.send(email);
});