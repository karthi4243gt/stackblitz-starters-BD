/***************************************** BD 2.1 - Objects Intro *****************************************/

/******************************************* Home work 1 ********************************************/

// Question 1: Create an endpoint that returns the details of a book stored on the server.

const express = require("express");

const app = express();

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:", PORT);
});

let book = {
  title : "The God of Small Things",
  author : "Arundhati Roy",
  publicationYear : 1997,
  genre : "Novel",
  isAvailable : true,
  stock : 5
}

app.get("/book", (req, res) => {
  res.json(book);
});

// Question 2: Design an endpoint that provides the full title and author of the book.

function getFullTitleAndAuthor(book){
  return book.title + " by " + book.author;
}

app.get("/book/fulltitle-author", (req, res) => {
  let fullTitleAndAuthor = getFullTitleAndAuthor(book);
  res.json({ fullTitleAndAuthor: fullTitleAndAuthor});
});

// Question 3: Develop an endpoint to access the genre and availability status of the book.

function getGenreAndAvailability(book){
  return {
    genre : book.genre,
    isAvailable : book.isAvailable
  };
}

app.get("/book/genre-availability", (req, res) => {
  res.json(getGenreAndAvailability(book));
});

// Question 4: Create an endpoint to calculate and return the age of the book.

function calculateBookAge(book){
  let currentYear = 2024;
  let publishedYear = book.publicationYear;
  return currentYear - publishedYear;
}

app.get("/book/age", (req, res) => {
  let bookAge = calculateBookAge(book);
  res.json({ age: bookAge});
});

// Question 5: Implement an endpoint to provide a summary of the book including its title, author, genre, and publication year.

function getBookSummary(book){
  let summary = "Title: " + book.title + ", Author: " + book.author + ", Genre: " + book.genre + ", Published: " + book.publicationYear;
  return summary;
}

app.get("/book/summary", (req, res) => {
  let bookSummary = getBookSummary(book);
  res.json({ summary : bookSummary });
});

// Question 6: Develop an endpoint to check the stock status of the book and determine if an order is required.

function checkStockAndOrder(book){
  if(book.stock > 0){
    return { status: "In Stock", stock: book.stock };
  }
  else{
    return { status: "Out of Stock", message: "Order Required"};
  }
}

app.get("/book/stock-status", (req, res) => {
  let stockStatus = checkStockAndOrder(book);
  res.json(stockStatus);
})