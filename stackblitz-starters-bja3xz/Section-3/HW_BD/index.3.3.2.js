/****************** Home Work - 1 => 3.3 section ***************/

const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// Array of products

let products = [
  { productId: 1, name: 'Laptop', inStock: true },
  { productId: 2, name: 'Phone', inStock: true },
  { productId: 3, name: 'Tablet', inStock: false },
];

// Array of employees

let employees = [
  { employeeId: 1, name: 'Alice', active: true },
  { employeeId: 2, name: 'Bob', active: true },
  { employeeId: 3, name: 'Charlie', active: false },
];

// Array of orders

let orders = [
  { orderId: 1, product: 'Laptop', delivered: false },
  { orderId: 2, product: 'Phone', delivered: true },
  { orderId: 3, product: 'Tablet', delivered: false },
];

// Array of reservation

let reservations = [
  { reservationId: 1, name: 'John', confirmed: false },
  { reservationId: 2, name: 'Jane', confirmed: true },
  { reservationId: 3, name: 'Jack', confirmed: false },
];

// Array of subscriptions

let subscriptions = [
  { subscriptionId: 1, service: 'Netflix', active: false },
  { subscriptionId: 2, service: 'Spotify', active: true },
  { subscriptionId: 3, service: 'Amazon Prime', active: false },
];

// Example 1: Remove Out of Stock Products

function removeOutOfStockProducts(product) {
  return product.inStock !== false;
  //return products.filter(product => product.inStock);
}

app.get('/products/remove-out-of-stock', (req, res) => {
  let result = products.filter((product) => removeOutOfStockProducts(product));
  res.json(result);
});

// Example 2: Update Employee Active Status by ID

function updateEmployeeStatusById(employees, employeeId, active) {
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].employeeId === employeeId) {
      employees[i].active = active;
    }
  }
  return employees;
}

app.get('/employees/update', (req, res) => {
  let employeeId = parseInt(req.query.employeeId);
  let active = req.query.active === 'true';
  let result = updateEmployeeStatusById(employees, employeeId, active);
  res.json(result);
});

// Example 3: Update Order Delivery Status by ID

function updateOrderStatusById(employees, orderId, delivered) {
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].orderId === orderId) {
      employees[i].delivered = delivered;
      break;
    }
  }
  return employees;
}

app.get('/orders/update', (req, res) => {
  let orderId = parseInt(req.query.orderId);
  let delivered = req.query.delivered;
  let result = updateEmployeeStatusById(employees, orderId, delivered);
  res.json(result);
});

// Example 4: Remove Unconfirmed Reservations

function removeUnconfirmedReservations(reservations) {
  return reservations.confirmed === true;
}

app.get('/reservations/remove-unconfirmed', (req, res) => {
  let result = reservations.filter((reservations) =>
    removeUnconfirmedReservations(reservations)
  );
  res.json(result);
});

// Example 5: Update Subscription Status by ID

function updateSubscriptionStatusById(subsccriptions, subscriptionId, active) {
  for (let i = 0; i < subscriptions.length; i++) {
    if (subscriptions[i].subscriptionId === subscriptionId) {
      subscriptions[i].active = active;
      break;
    }
  }
  return subscriptions;
}

app.get('/subscriptions/update', (req, res) => {
  let subscriptionId = parseInt(req.query.subscriptionId);
  let active = req.query.active;
  let result = subscriptions.filter((subscriptions) =>
    updateSubscriptionStatusById(subscriptions, subscriptionId, active)
  );
  res.json(result);
});
