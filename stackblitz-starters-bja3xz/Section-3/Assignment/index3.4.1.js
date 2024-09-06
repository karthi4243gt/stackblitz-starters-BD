const express = require('express');
const { resolve } = require('path');
let cors = require('cors');

const app = express();
const port = 3010;
app.use(cors());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// Array of cart

let cart = [
  { productId: 1, name: 'Laptop', price: 50000, quantity: 1 },
  { productId: 2, name: 'Mobile', price: 20000, quantity: 2 },
];

// Endpoint 1: Add an Item to the Cart

function addProductToCart(productId, kart, name, price, quantity) {
  kart.push({
    productId: productId,
    name: name,
    price: price,
    quantity: quantity,
  });
  return kart;
}

app.get('/cart/add', (req, res) => {
  let kart = cart.slice();
  let productId = parseInt(req.query.productId);
  let name = req.query.name;
  let price = parseFloat(req.query.price);
  let quantity = parseInt(req.query.quantity);
  let result = addProductToCart(productId, kart, name, price, quantity);
  res.json(result);
});

// Endpoint 2: Edit Quantity of an Item in the Cart

function editQuantity(cart, productId, quantity) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].productId === productId) {
      cart[i].quantity = quantity;
    }
  }
  return cart;
}

app.get('/cart/edit', (req, res) => {
  let productId = parseInt(req.query.productId);
  let quantity = parseInt(req.query.quantity);
  let result = editQuantity(cart, productId, quantity);
  res.json(result);
});

// Endpoint 3: Delete an Item from the Cart

function deleteItem(cart, productId) {
  return cart.productId !== productId;
}

app.get('/cart/delete', (req, res) => {
  let productId = parseInt(req.query.productId);
  let result = cart.filter((cart) => deleteItem(cart, productId));
  res.json(result);
});

// Endpoint 4: Read Items in the Cart

app.get('/cart', (req, res) => {
  res.json(cart);
});

// Endpoint 5: Calculate Total Quantity of Items in the Cart

function totalQuantity(cart) {
  let sum = 0;
  for (let i = 0; i < cart.length; i++) {
    sum = sum + cart[i].quantity;
  }
  return sum;
}

app.get('/cart/total-quantity', (req, res) => {
  let result = totalQuantity(cart);
  res.json({ totalQuantity: result });
});

// Endpoint 6: Calculate Total Price of Items in the Cart

function totalPriceOfQuantity(cart) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total = total + cart[i].price * cart[i].quantity;
  }
  return total;
}

app.get('/cart/total-price', (req, res) => {
  let result = totalPriceOfQuantity(cart);
  res.json({ totalPrice: result });
});
