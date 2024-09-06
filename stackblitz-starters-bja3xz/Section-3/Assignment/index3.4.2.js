const express = require('express');
const { resolve } = require('path');
let cors = require('cors');

const app = express();
const port = 3010;
app.use(cors());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// AirFlow Task Management System

// Data Structure

let tasks = [
  { taskId: 1, text: 'Fix bug #101', priority: 2 },
  { taskId: 2, text: 'Implement feature #202', priority: 1 },
  { taskId: 3, text: 'Write documentation', priority: 3 },
];

// Endpoint 1. Add a Task to the Task List

function addTask(tasks1, taskId, text, priority) {
  tasks1.push({
    taskId: taskId,
    text: text,
    priority: priority,
  });
  return tasks1;
}

app.get('/tasks/add', (req, res) => {
  let tasks1 = tasks.slice();
  let taskId = parseInt(req.query.taskId);
  let text = req.query.text;
  let priority = parseInt(req.query.priority);
  let result = addTask(tasks1, taskId, text, priority);
  res.json(result);
});

// Endpoint 2. Read All Tasks in the Task List

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Endpoint 3. Sort Tasks by Priority

function sortByPriority(task1, task2) {
  return task1.priority - task2.priority;
}

app.get('/tasks/sort-by-priority', (req, res) => {
  let tasks1 = tasks.slice();
  let result = tasks1.sort(sortByPriority);
  res.json(result);
});

// Endpoint 4. Edit Task Priority

function editTaskByPriority(taskId, priority) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].taskId === taskId) {
      tasks[i].priority = priority;
    }
  }
  return tasks;
}

app.get('/tasks/edit-priority', (req, res) => {
  let taskId = parseInt(req.query.taskId);
  let priority = parseInt(req.query.priority);
  let result = editTaskByPriority(taskId, priority);
  res.json(result);
});

// Endpoint 5. Edit/Update Task Text

function updateTaskText(taskId, text) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].taskId === taskId) {
      tasks[i].text = text;
    }
  }
  return tasks;
}

app.get('/tasks/edit-text', (req, res) => {
  let taskId = parseInt(req.query.taskId);
  let text = req.query.text;
  let result = updateTaskText(taskId, text);
  res.json(result);
});

// Endpoint 6. Delete a Task from the Task List

function deleteTheTask(taskId) {
  return tasks.filter((tasks) => tasks.taskId !== taskId);
}

app.get('/tasks/delete', (req, res) => {
  let taskId = parseInt(req.query.taskId);
  let result = deleteTheTask(taskId);
  res.json(result);
});

// Endpoint 7. Filter Tasks by Priority

function filterTaskByPriority(tasks, priority) {
  return tasks.priority === priority;
}

app.get('/tasks/filter-by-priority', (req, res) => {
  let priority = parseInt(req.query.priority);
  let result = tasks.filter((tasks) => filterTaskByPriority(tasks, priority));
  res.json(result);
});
