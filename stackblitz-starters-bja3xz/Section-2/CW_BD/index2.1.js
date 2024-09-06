/***************************************** BD 2.1 - Object Intro *******************************************/

const express = require("express");
const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:", PORT);
});

// Exercise 1: Return the Person Object

let person = {
  firstName: "Amit",
  lastName: "Sharma",
  gender: "Male",
  age: 25,
  isMember: true
};

app.get("/person", (req, res) => {
  res.json(person);
});

// Exercise 2: Access the Full Name of the Person

function getFullName(person) {
  return person.firstName + " " + person.lastName;
}

app.get("/person/fullname", (req, res) => {
  let fullName = getFullName(person);
  res.json({ fullName: fullName });
});

// Exercise 3: Access Just the First Name and Gender of the Person

app.get("/person/firstname-gender", (req, res) => {
  let fName = person.firstName;
  let gender = person.gender;
  res.json({ firstName: fName, gender: gender });
});

// Exercise 4: Increment the Age of the Person and Return the Updated Object

function incrementAge(person) {
  person.age++;
  return person;
}

app.get("/person/increment-age", (req, res) => {
  let updatedPerson = incrementAge(person); 
  res.json(updatedPerson);
});

// Exercise 5: Return the Full Name and Membership Status of the Person

function NameStatus(person){
  return {
    fullName : getFullName(person),
    isMember : person.isMember
  };
}

app.get("/person/fullname-membership", (req, res) =>{
  let fullNameStatus = NameStatus(person);
  res.json(fullNameStatus);
});

// Exercise 6: Get Final Price After Discount for Members

function getFinalPrice(isMember, cartTotal){
  let discount = 0.10;
  let discountPrice;
  if(isMember){
     discountPrice = cartTotal * (1 - discount);
  } else{
    discountPrice = cartTotal; 
  }
  return { finalPrice:  discountPrice.toFixed(2) };
}

app.get("/person/final-price", (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let Final = getFinalPrice(person.isMember, cartTotal);
  res.json(Final);
});

// Exercise 7: Get Shipping Cost Based on Cart Total and Membership Status

function getShippingCost(cartTotal, isMember){
  let shippingCost;
  if(cartTotal > 500 && isMember){
    shippingCost = 0;
  } else{
    shippingCost = 99;
  }
  return { shippingCost: shippingCost.toFixed(2) };
}

app.get("/person/shipping-cost", (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let shippingCost = getShippingCost(cartTotal, person.isMember);
  res.json(shippingCost);
});