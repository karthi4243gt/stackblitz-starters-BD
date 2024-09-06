/*************************** BD2.4 - HW-2 ****************************/

// Sort 

let express = require('express');
let app = express();

let PORT = 3000;

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

// Exercise 1: Sort Books by Year in ascending order

let books = [
   { title: 'Moby Jonas', author: 'Herman Melville', publication_year: 2023 },
   { title: '1984', author: 'George Orwell', publication_year: 1984 },
   { title: 'A Tale of Two Cities', author: 'Charles Jonas', publication_year: 2000 },
];

function sortBooksByYear (book1, book2){
  return book1.publication_year - book2.publication_year;
}

app.get("/books/sort-by-year", (req, res) => {
  let bookCopy = books.slice();
  bookCopy.sort(sortBooksByYear);
  res.json(bookCopy);
});


// Exercise 2: Sort Employees by Salary in Descending Order

let employees = [
  { name: "John", salary: 75000 },
  { name: "Doe", salary: 30000 },
  { name: "Jane", salary: 50000 }
]

function sortEmployeesBySalary (employee1, employee2){
  return employee2.salary - employee1.salary;
}

app.get("/employees/sort-by-salary", (req, res) => {
  let employeeCopy = employees.slice();
  employeeCopy.sort(sortEmployeesBySalary);
  res.json(employeeCopy);
});


// Exercise 3: Sort Products by Price in Ascending Order

let products = [
  { name: "Product A", price: 15 },
  { name: "Product B", price: 25 },
  { name: "Product C", price: 10 }
];

function sortProductsByPrice(product1, product2){
  return product1.price - product2.price;
}

app.get("/products/sort-by-price", (req, res) => {
  let productCopy = products.slice();
  productCopy.sort(sortProductsByPrice);
  res.json(productCopy);
});


// Exercise 4: Sort Movies by Rating in Descending Order

let movies = [
  {title: "Movie A", rating: 9.0 },
  {title: "Movie C", rating: 7.0 }, 
  {title: "Movie B", rating: 8.5 } 
]

function sortMoviesByRating (movie1, movie2){
  return movie2.rating - movie1.rating;
}

app.get("/movies/sort-by-rating", (req, res) => {
  let moviesCopy = movies.slice();
  moviesCopy.sort(sortMoviesByRating);
  res.json(moviesCopy);
})
