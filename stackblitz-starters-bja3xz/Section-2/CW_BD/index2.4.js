/************************ BD2.4 - CW *************************/

// Sort with Array of Objects

let express = require("express");
let app = express();

let PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running on PORT : ", PORT);
});

// Question 1: Sort Ages in Ascending Order

let ages = [25, 30, 18, 22, 27];

function sortAgesAscending(age1, age2) {
  return age1 - age2;
}

app.get("/ages/sort-ascending", (req, res) => {
  let agesCopy = ages.slice();
  agesCopy.sort(sortAgesAscending);
  res.json(agesCopy);
});

// Question 2: Sort Ages in Descending Order

// using the ages array from the previous question

function sortAgesDescending(age1, age2) {
  return age2 - age1;
}

app.get("/ages/sort-descending", (req, res) => {
  let agesCopy = ages.slice();
  agesCopy.sort(sortAgesDescending);
  res.json(agesCopy);
});

// Question 3: Sort Students by Marks in Descending Order

let students = [
  { name: "Rahul", rollNo: 101, marks: 85 }, // student 1
  { name: "Sita", rollNo: 102, marks: 95 }, // student 2
  { name: "Amit", rollNo: 103, marks: 70 }, // student 3
];

function sortStudentsByMarksDescending(student1, student2) {
  return student2.marks - student1.marks;
}

app.get("/students/sort-by-marks-descending", (req, res) => {
  let studentCopy = students.slice();
  studentCopy.sort(sortStudentsByMarksDescending);
  res.json(studentCopy);
});

// Question 4: Sort Cars by Mileage in Descending Order

let cars = [
  { make: "Maruti", model: "Swift", mileage: 15 },
  { make: "Hyundai", model: "i20", mileage: 18 },
  { make: "Tata", model: "Nexon", mileage: 20 },
];

function sortCarsByMileageDescending(car1, car2) {
  return car2.mileage - car1.mileage;
}

app.get("/cars/sort-by-mileage-descending", (req, res) => {
  let carsCopy = cars.slice();
  carsCopy.sort(sortCarsByMileageDescending);
  res.json(carsCopy);
});
