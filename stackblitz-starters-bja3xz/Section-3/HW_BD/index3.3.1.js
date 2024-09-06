/****************** Home Work - 1 => 3.3 section ***************/

const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// Array of watchList - 1
let watchList = [
  {
    videoId: 1,
    title: 'JavaScript Tutorial',
    watched: false,
    url: 'https://youtu.be/shorturl1',
    isFavorite: false,
  },
  {
    videoId: 2,
    title: 'Node.js Basics',
    watched: true,
    url: 'https://youtu.be/shorturl2',
    isFavorite: false,
  },
  {
    videoId: 3,
    title: 'React.js Guide',
    watched: false,
    url: 'https://youtu.be/shorturl3',
    isFavorite: false,
  },
];

// Array of Tasks
let tasks = [
  { taskId: 1, title: 'Buy groceries', completed: false },
  { taskId: 2, title: 'Walk the dog', completed: false },
  { taskId: 3, title: 'Do laundry', completed: true },
];

// Array of Books
let books = [
  { bookId: 1, title: '1984', available: true },
  { bookId: 2, title: 'Brave New World', available: true },
  { bookId: 3, title: 'Fahrenheit 451', available: false },
];

// Exercise 1: Remove All Unwatched Videos

function removeUnwatchedVideo(videos) {
  //return watchList.filter(video => video.watched)
  return videos.watched !== false;
}

app.get('/watchlist/delete-unwatched', (req, res) => {
  let tempArray = watchList.slice();
  let result = tempArray.filter((videos) => removeUnwatchedVideo(videos));
  temmpArray = result;
  res.json(result);
});

// Exercise 2: Mark Video as Favorite by ID

function markVideoByFavorite(watchList, videoId, isFavorite) {
  for (let i = 0; i < watchList.length; i++) {
    if (watchList[i].videoId === videoId) {
      watchList[i].isFavorite = isFavorite;
      break;
    }
  }
  return watchList;
}

app.get('/watchlist/favorite', (req, res) => {
  let videoId = parseInt(req.query.videoId);
  let isFavorite = req.query.isFavorite;
  let result = markVideoByFavorite(watchList, videoId, isFavorite);
  res.json(result);
});

// Example 3: Update Task Status by ID

function updateTaskStatusById(tasks, taskId, completed) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].taskId === taskId) {
      tasks[i].completed = completed;
      break;
    }
  }
  return tasks;
}

app.get('/tasks/update', (req, res) => {
  let taskId = parseInt(req.query.taskId);
  let completed = req.query.completed;
  let result = updateTaskStatusById(tasks, taskId, completed);
  res.json(result);
});

// Example 4: Remove Completed Tasks

function removeCompletedTasks(tasks) {
  return tasks.completed !== true;
}

app.get('/tasks/remove-completed', (req, res) => {
  let tempArray = tasks;
  let result = tasks.filter((tasks) => removeCompletedTasks(tasks));
  res.json(result);
});

// Example 5: Update Library Book Availability by ID

function updateBookAvailabilityById(books, bookId, available) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].bookId === bookId) {
      books[i].available = available;
      break;
    }
  }
  return books;
}

app.get('/library/update', (req, res) => {
  let bookId = parseInt(req.query.bookId);
  let available = req.query.available;
  let result = books.filter((book) =>
    updateBookAvailabilityById(books, bookId, available)
  );
  res.json(result);
});
