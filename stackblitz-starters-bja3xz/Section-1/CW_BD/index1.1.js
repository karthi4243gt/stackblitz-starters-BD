const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

//Specifying the port to run the code on express server
const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:", PORT);
});

/***************************************** BD 1.1 - Strings *******************************************/

//problem 1 :  To shout name in Uppercase
app.get("/name", (request, response) => {
  let getName = request.query.name;
  let UpName = getName.toUpperCase();
  response.send(UpName);
  //console.log(getName);
});

//problem 2  : Concatenate firstname and lastname to return full name
app.get("/fullname", (request, response) => {
  let firstName = request.query.firstName;
  let lastName = request.query.lastName;
  let fullName = firstName + " " + lastName;
  response.send(fullName);
});

//problem 3 : Concatenate month and year to return a formatted date
app.get("/date", (request, response) => {
  let month = request.query.month;
  let year = request.query.year;
  let date = month + ", " + year;
  response.send(date);
});

//problem 4 : Return a greeting with the given name
app.get("/greet", (request, response) => {
  let name = request.query.name;
  let greet = "Namaste, " + name + "!";
  response.send(greet);
});

//problem 5 : Return a formatted address
app.get("/address", (request, response) => {
  let street = request.query.street;
  let city = request.query.city;
  let state = request.query.state;
  let address = street + ", " + city + ", " + state;
  response.send(address);
});

//problem 6 : Return a formatted email
app.get("/email", (request, response) => {
  let username = request.query.username;
  let domain = request.query.domain;
  let formatted_email = username + "@" + domain;
  response.send(formatted_email);
});
