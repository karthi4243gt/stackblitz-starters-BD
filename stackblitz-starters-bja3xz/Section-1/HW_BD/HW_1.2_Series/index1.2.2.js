/***************************************** BD 1.2 - Operators
 *******************************************/
/******************************************* Home work 2 ********************************************/

// 1.2.1 Body Mass Index (BMI) Calculator
app.get("/bmi", (request, response) => {
  let height = parseFloat(request.query.height);
  let weight = parseFloat(request.query.weight);
  let bmi = weight / (height * height);
  response.send(bmi.toString());
});

// 1.2.2 Calculate grocery checkout price
app.get("/checkout", (request, response) => {
  let product = request.query.product;
  let units = parseFloat(request.query.units);
  let price = parseFloat(request.query.price);

  let total_price = units * price;
  response.send(
    "Your total for " + units + " " + product + " is " + total_price.toString(),
  );
});

// 1.2.3 calculate grade percentage
app.get("/grade", (request, response) => {
  let maths = parseInt(request.query.maths);
  let science = parseInt(request.query.science);
  let english = parseInt(request.query.english);
  let gradeInPercentage = ((maths + science + english) / 300) * 100;
  response.send(
    "Your grade in percentage is " + Math.ceil(gradeInPercentage) + "%",
  );
});

// 1.2.4 Return Bill amount after applying discount
app.get("/discounted-price", (request, response) => {
  let cartTotal = parseFloat(request.query.cartTotal);
  let discount = parseFloat(request.query.discount);
  let bill = cartTotal - cartTotal * (discount / 100);
  response.send("Your bill amount is " + bill.toString());
});

// 1.2.5 split bill among friends
app.get("/split-bill", (request, response) => {
  let billAmount = parseFloat(request.query.billAmount);
  let numberOfFriends = parseFloat(request.query.numberOfFriends);
  let splitPay = billAmount / numberOfFriends;
  response.send("Each friend owes Rs. ₹" + splitPay + " against the bill");
});

// 1.2.6 convert celcius to fahrenheit
app.get("/celsius-to-fahrenheit", (request, response) => {
  let temperature = parseFloat(request.query.temperature);
  let fahrenheit = (temperature * 9) / 5 + 32;
  response.send("Result: " + fahrenheit.toString() + " Fahrenheit");
});

// 1.2.7 calculate monthly salary
app.get("/monthly-salary", (request, response) => {
  let totalHours = parseFloat(request.query.totalHours);
  let hourlyWage = parseFloat(request.query.hourlyWage);
  let monthlySalary = totalHours * hourlyWage;
  response.send("Result: Your monthly salary is ₹" + monthlySalary.toString());
});
