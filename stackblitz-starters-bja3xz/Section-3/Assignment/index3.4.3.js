const express = require('express');
const { resolve } = require('path');
let cors = require('cors');

const app = express();
const port = 3010;
app.use(cors());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// Fitness Tracker

// Data Structure

let activities = [
  { activityId: 1, type: 'Running', duration: 30, caloriesBurned: 300 },
  { activityId: 2, type: 'Swimming', duration: 45, caloriesBurned: 400 },
  { activityId: 3, type: 'Cycling', duration: 60, caloriesBurned: 500 },
];

// Endpoint 1: Add an Activity

function addAnActivity(
  activitiesCopy,
  activityId,
  type,
  duration,
  caloriesBurned
) {
  activitiesCopy.push({
    activityId: activityId,
    type: type,
    duration: duration,
    caloriesBurned: caloriesBurned,
  });

  return activitiesCopy;
}

app.get('/activities/add', (req, res) => {
  let activitiesCopy = activities.slice();
  let activityId = parseInt(req.query.activityId);
  let type = req.query.type;
  let duration = parseInt(req.query.duration);
  let caloriesBurned = parseInt(req.query.caloriesBurned);
  let result = addAnActivity(
    activitiesCopy,
    activityId,
    type,
    duration,
    caloriesBurned
  );
  res.json(result);
});

// Endpoint 2: Sort Activities by Duration

function sortActivitiesByDuration(activities1, activities2) {
  return activities1.duration - activities2.duartion;
}

app.get('/activities/sort-by-duration', (req, res) => {
  let activityCopy = activities.slice();
  let result = activityCopy.sort(sortActivitiesByDuration);
  res.json(result);
});

// Endpoint 3: Filter Activities by Type

function filterActivity(type, activityCopy) {
  return activityCopy.filter((activityCopy) => activityCopy.type === type);
}

app.get('/activities/filter-by-type', (req, res) => {
  let activityCopy = activities.slice();
  let type = req.query.type;
  let result = filterActivity(type, activityCopy);
  res.json(result);
});

// Endpoint 4: Calculate Total Calories Burned

function calculateTotalCalories() {
  let sum = 0;
  for (let i = 0; i < activities.length; i++) {
    sum = sum + activities[i].caloriesBurned;
  }
  return sum;
}

app.get('/activities/total-calories', (req, res) => {
  let result = calculateTotalCalories();
  res.json({ totalCaloriesBurned: result });
});

// Endpoint 5: Update Activity Duration by ID

function updateActivity(activityId, duration) {
  for (let i = 0; i < activities.length; i++) {
    if (activities[i].activityId === activityId) {
      activities[i].duration = duration;
    }
  }
  return activities;
}

app.get('/activities/update-duration', (req, res) => {
  let activityId = parseInt(req.query.activityId);
  let duration = parseInt(req.query.duration);
  let result = updateActivity(activityId, duration);
  res.json(result);
});

// Endpoint 6: Delete Activity by ID

function deleteActivityById(activityId) {
  return activities.filter(
    (activities) => activities.activityId !== activityId
  );
}

app.get('/activities/delete', (req, res) => {
  let activityId = parseInt(req.query.activityId);
  let result = deleteActivityById(activityId);
  res.json(result);
});

// Endpoint 7: Delete Activities by Type

function deleteActivityByType(type) {
  return activities.filter((activities) => activities.type !== type);
}

app.get('/activities/delete', (req, res) => {
  let activityId = parseInt(req.query.activityId);
  let result = deleteActivityById(type);
  res.json(result);
});
