let express = require("express");
let app = express();

let PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:", PORT);
});

/***************************************** BD 1.2 - Operators *******************************************/

//Endpoint 1 : calculate the total distance covered by adding two trips 
app.get("/total-distance", (request, response) => {
  let distance1 = parseFloat(request.query.distance1);
  let distance2 = parseFloat(request.query.distance2);
  let total_distance = distance1 + distance2;
  response.send(total_distance.toString());
});

//Endpoint 2 : calculate the total time spent on multiple activities
app.get("/total-time", (request, response) => {
  let time1 = parseFloat(request.query.time1);
  let time2 = parseFloat(request.query.time2);
  let time3 = parseFloat(request.query.time3);
  let total_time = time1 + time2 + time3;
  response.send(total_time.toString());
});

//Endpoint 3 : calcuate the average speed given total distance and time taken
app.get("/average-speed", (request, response) => {
  let totalDistance = parseInt(request.query.totalDistance);
  let totalTime = parseInt(request.query.totalTime);
  let average_speed = totalDistance / totalTime;
  response.send(average_speed.toString());
});

//Endpoint 4 : calculate the estimated time of arrival (ETA) given distance and speed
app.get("/eta", (request, response) => {
  let distance = parseInt(request.query.distance);
  let speed = parseInt(request.query.speed);
  let eta = distance / speed;
  response.send(eta.toString());
});

//Endpoint 5 : calculate the total calories burned based on activity duration and calories burned per minute
app.get("/total-calories", (request, response) => {
  let duration1 = parseInt(request.query.duration1);
  let duration2 = parseInt(request.query.duration2);
  let caloriesPerMinute = parseInt(request.query.caloriesPerMinute);
  let total_calories = (duration1 + duration2) * caloriesPerMinute;
  response.send(total_calories.toString());
});

//Endpoint 6 : calculate the interest earned on a savings account given principal, rate and time
app.get("/interest-earned", (request, response) => {
  let principal = parseInt(request.query.principal);
  let rate = parseInt(request.query.rate);
  let time = parseInt(request.query.time);
  let interest = (principal*rate*time) / 100;
  response.send(interest.toString());
});