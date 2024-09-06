const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

let watchList = [
  {
    videoId: 1,
    title: 'JavaScript Tutorial',
    watched: false,
    url: 'https://youtu.be/shorturl1',
  },
  {
    videoId: 2,
    title: 'Node.js Basics',
    watched: true,
    url: 'https://youtu.be/shorturl2',
  },
  {
    videoId: 3,
    title: 'React.js Guide',
    watched: false,
    url: 'https://youtu.be/shorturl3',
  },
];

// Exercise 1: Update the Watched Status of a Video by ID

function updateWatchedStatus(videoId, watchList, watched) {
  for (let i = 0; i < watchList.length; i++) {
    if (watchList[i].videoId === videoId) {
      watchList[i].watched = watched;
    }
  }
  return watchList;
}

app.get('/watchlist/update', (req, res) => {
  let videoId = parseInt(req.query.videoId);
  let watched = req.query.watched === 'true';
  let result = updateWatchedStatus(videoId, watchList, watched);
  res.json(result);
});

// Exercise 2: Update the Watched Status of All Videos

function updateAllVideosWatchedStatus(watched, watchList) {
  for (let i = 0; i < watchList.length; i++) {
    watchList[i].watched = watched;
  }
  return watchList;
}

app.get('/watchlist/update-all', (req, res) => {
  let watched = req.query.watched;
  let result = updateAllVideosWatchedStatus(watched, watchList);
  res.json(result);
});

// Exercise 3: Delete a Video by ID

function shouldDeleteById(videoId, video) {
  return video.videoId !== videoId;
}

app.get('/watchlist/delete', (req, res) => {
  let videoId = parseInt(req.query.videoId);
  let result = watchList.filter((video) => shouldDeleteById(videoId, video));
  watchList = result;
  res.json(result);
});

// Exercise 4: Delete Watched Videos

function deleteWatchedVideos(video) {
  return video.watched !== true; // !video.watched;
}

app.get('/watchlist/delete-watched', (req, res) => {
  let result = watchList.filter((video) => deleteWatchedVideos(video));
  watchList = result;
  res.json(result);
});
