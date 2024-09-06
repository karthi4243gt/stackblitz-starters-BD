/****************** Section 3 => 3.2 Class Work ***************/

let express = require("express");
let app = express();

let PORT = 3000;

app.listen(PORT, () => {
  console.log("Server is running on port ", PORT);
});

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let names = ["Rahul", "Sita", "Amit", "Vikram", "Priya"];

let employees = [
  { employeeId: 1, name: "Rahul" },
  { employeeId: 2, name: "Sita" },
  { employeeId: 3, name: "Amit" },
];

let contacts = [
  { phoneNumber: "1234567890", name: "Rahul", address: "123 Street, City" },
  { phoneNumber: "0987654321", name: "Sita", address: "456 Avenue, City" },
  { phoneNumber: "1112223334", name: "Amit", address: "789 Boulevard, City" },
];

// Exercise 1: Find a Number in the Array

function findNumber(number, toFind) {
  return number === toFind;
}

app.get("/numbers/find/:toFind", (req, res) => {
  let toFind = parseInt(req.params.toFind);
  let result = numbers.find((number) => findNumber(number, toFind));
  res.json(result);
});

// Exercise 2:Find a Name in the Array

function findName(nameArray, name) {
  return nameArray === name;
}

app.get("/names/find/:name", (req, res) => {
  let name = req.params.name;
  let result = names.find((nameArray) => findName(name, nameArray));
  res.json(result);
});

// Exercise 3: Find an Employee by ID

function findEmployee(employeeArray, id) {
  return employeeArray.employeeId === id;
}

app.get("/employees/find/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let result = employees.find((employeeArray) =>
    findEmployee(employeeArray, id),
  );
  res.json(result);
});

// Exercise 4: Find a Contact by Phone Number

function findContact(contactArray, phoneNumber) {
  return contactArray.phoneNumber === phoneNumber;
}

app.get("/contacts/find/:phoneNumber", (req, res) => {
  let phoneNumber = req.params.phoneNumber;
  let result = contacts.find((contactArray) =>
    findContact(contactArray, phoneNumber),
  );
  res.json(result);
});
