/************************ BD2.3 - CW *************************/

// Filter with Array of Objects

const express = require("express");
const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

// Question 1: Filter Products by Category

let products = [
  //array of Objects
  { name: "Laptop", price: 50000, category: "Electronics" }, //Objects
  { name: "Mobile", price: 20000, category: "Electronics" },
  { name: "Shirt", price: 1500, category: "Apparel" },
  { name: "Mixer Grinder", price: 4000, category: "Home Appliances" },
];

function filterByCategory(product, category) {
  return product.category === category;
}

app.get("/products/category/:category", (req, res) => {
  let category = req.params.category;
  let result = products.filter((product) =>
    filterByCategory(product, category),
  );
  res.json(result);
});


// Question 2: Filter Cars by Mileage

let cars = [
  { make: "Maruti", model: "Swift", mileage: 15000 },
  { make: "Hyundai", model: "i20", mileage: 25000 },
  { make: "Tata", model: "nexon", mileage: 30000 }
]

function filterByMileage(car, mileage){
  return car.mileage < mileage;
}

app.get("/cars/mileage/:mileage", (req, res) => {
  let mileage = parseFloat(req.params.mileage);
  let result = cars.filter(car => filterByMileage(car, mileage));
  res.json(result);
})

// Question 3: Filter Movies by Rating

let movies = [
  { title: "3 Idiots", genre: "Comedy", rating: 9 },
  { title: "Dangal", genre: "Drama", rating: 10},
  { title: "Bahubali", genre: "Action", rating: 8}
]

function filterByRating(movie, rating){
  return movie.rating > rating;
}

app.get("/movies/rating/:rating", (req, res) => {
  let rating = parseInt(req.params.rating);
  let result = movies.filter(movie => filterByRating(movie, rating));
  res.json(result);
});

// Question 4: Filter Orders by Status

let orders = [
  { orderId: 1, customerName: "Rahul", status: "shipped" },
  { orderId: 2, customerName: "Sita", status: "pending" },
  { orderId: 3, customerName: "Amit", status: "shipped" }
]

function filterByStatus(order, status){
  return order.status === status;
}

app.get("/orders/status/:status", (req, res) => {
  let status = req.params.status;
  let result = orders.filter(order => filterByStatus(order, status));
  res.json(result);
})

