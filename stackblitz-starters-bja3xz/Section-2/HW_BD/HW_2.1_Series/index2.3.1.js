/************************ BD2.3 - HW - 1 *************************/

// Filter with Array of Objects => HOME WORK 1

let express = require("express");
let app = express();

let PORT = 3000;

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

// Question 1: Write an Express code snippet to filter employees by department.

let employees = [
  { name: "Rahul Gupta", department: "HR", salary: 50000 },
  { name: "Sneha Sharma", department: "Finance", salary: 60000 },
  { name: "Priya Singh", department: "Marketing", salary: 55000 },
  { name: "Amit Kumar", department: "IT", salary: 65000 },
];

function filterByDepartment(employee, department) {
  return employee.department === department;
}

app.get("/employees/department/:department", (req, res) => {
  let department = req.params.department;
  let result = employees.filter((employee) =>
    filterByDepartment(employee, department),
  );
  res.json(result);
});

// Question 2: Write an Express code snippet to filter bikes by mileage greater than a specified value.

let bikes = [
  { make: "Hero", model: "Splendor", mileage: 80 },
  { make: "Bajaj", model: "Pulsar", mileage: 60 },
  { make: "TVS", model: "Apache", mileage: 70 },
];

function filterByMileage(bike, minMileage) {
  return bike.mileage > minMileage;
}

app.get("/bikes/mileage/:minMileage", (req, res) => {
  let minMileage = parseInt(req.params.minMileage);
  let result = bikes.filter((bike) => filterByMileage(bike, minMileage));
  res.json(result);
});

// Question 3: Write an Express code snippet to filter bikes by a specific make.

// Using the Bikes Array

function filterByMake(bike, make) {
  return bike.make === make;
}

app.get("/bikes/make/:make", (req, res) => {
  let make = req.params.make;
  let result = bikes.filter((bike) => filterByMake(bike, make));
  res.json(result);
});

// Question 4: Write an Express code snippet to filter songs by rating higher than a specified value.

let songs = [
  { title: "Tum Hi Ho", genre: "Romantic", rating: 4 },
  { title: "Senorita", genre: "Pop", rating: 5 },
  { title: "Dil Chahta Hai", genre: "Bollywood", rating: 3 },
];

function filterByRating(song, rating) {
  return song.rating > rating;
}

app.get("/songs/rating/:rating", (req, res) => {
  let rating = parseFloat(req.params.rating);
  let result = songs.filter((song) => filterByRating(song, rating));
  res.json(result);
});

// Question 5: Write an Express code snippet to filter songs by a specific genre.

// Using the Songs Array

function filterByGenre(genre, song) {
  return song.genre === genre;
}

app.get("/songs/genre/:genre", (req, res) => {
  let genre = req.params.genre;
  let result = songs.filter((song) => filterByGenre(genre, song));
  res.json(result);
});

// Question 6: Write an Express code snippet to filter tasks by a specific status.

let tasks = [
  { taskId: 1, title: "Prepare Presentation", status: "Pending" },
  { taskId: 2, title: "Attend Meeting", status: "in-progress" },
  { taskId: 3, title: "Submit Report", status: "completed" },
];

function filterByStatus(task, status) {
  return task.status === status;
}

app.get("/tasks/status/:status", (req, res) => {
  let status = req.params.status;
  let result = tasks.filter((task) => filterByStatus(task, status));
  res.json(result);
});
