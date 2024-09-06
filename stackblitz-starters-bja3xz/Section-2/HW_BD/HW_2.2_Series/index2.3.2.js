/************************ BD2.3 - HW - 2 *************************/

// Filter with Array of Objects => HOME WORK 2

let express = require("express");
let app = express();

let PORT = 3000;

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

// Exercise 1: Filter In-Stock Product

let products = [
  { name: "Product A", inStock: true },
  { name: "Product B", inStock: false },
  { name: "Product C", inStock: true },
  { name: "Product D", inStock: false },
];

function filterInStockProducts(product) {
  //return product.inStock;
  return product.inStock === true;
}

app.get("/in-stock-products", (req, res) => {
  let result = products.filter((product) => filterInStockProducts(product));
  res.json(result);
});


// Exercise 2: Filter Adults from User List

// Array of users
let users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 17 },
  { name: 'Dave', age: 16 }
];

function filterAdults(user) {
  return user.age >= 18;
}

app.get("/adult-users", (req, res) => {
  let result = users.filter((user) => filterAdults(user));
  res.json(result);
});


// Exercise 3: Filter Expensive Products

// Array of products with prices
let productPrices = [
  { name: 'Product A', price: 50 },
  { name: 'Product B', price: 150 },
  { name: 'Product C', price: 200 },
  { name: 'Product D', price: 90 }
];

function filterExpensiveProducts(product, price){
  return product.price > price;
}

app.get("/expensive-products", (req, res) => {
  let price = parseInt(req.query.price);
  let result = productPrices.filter((product) => filterExpensiveProducts(product, price));
  res.json(result);
});


// Exercise 4: Filter Articles by Word Count 

// Array of articles with word counts
let articles = [
  { title: 'Article A', wordCount: 400 },
  { title: 'Article B', wordCount: 600 },
  { title: 'Article C', wordCount: 700 },
  { title: 'Article D', wordCount: 300 }
];

function filterLongArticles(article, minWords){
  return article.wordCount > minWords;
}

app.get("/long-articles", (req, res) => {
  let minWords = parseInt(req.query.minWords);
  let result = articles.filter((article) => filterLongArticles(article, minWords));
  res.json(result);
});


// Exercise 5: Filter Movies by Rating

// Array of movies with ratings
let movies = [
  { title: 'Movie A', rating: 8.5 },
  { title: 'Movie B', rating: 7.0 },
  { title: 'Movie C', rating: 9.0 },
  { title: 'Movie D', rating: 6.5 }
];

function filterHighRatedMovies(movie, rating){
  return movie.rating > rating;
}

app.get("/high-rated-movies", (req, res) => {
  let rating = parseFloat(req.query.rating);
  let result = movies.filter((movie) => filterHighRatedMovies(movie, rating));
  res.json(result);
});


// Exercise 6: Filter Employees by Experience

// Array of employees with experience in years
let employees = [
  { name: 'Employee A', experience: 3 },
  { name: 'Employee B', experience: 6 },
  { name: 'Employee C', experience: 10 },
  { name: 'Employee D', experience: 2 }
];

function filterExperiencedEmployees(employee, years){
  return employee.experience > years;
}

app.get("/experienced-employees", (req, res) => {
  let years = parseInt(req.query.years);
  let result = employees.filter((employee) => filterExperiencedEmployees(employee, years));
  res.json(result);
});