// const { log } = require("console");
const express = require("express");
const https = require("https");

const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// adding the css file to the project
app.use(express.static("public"));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/weather.html");
});
app.post("/", function (req, res) {
  const query = req.body.cityName;
  const appId = "a1673082934d8308557e6ee0060d83aa";
  const unit = "metric";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=" +
    appId +
    "&units=" +
    unit +
    "#";
  console.log(url);
  https.get(url, function (response) {
    console.log(response.statusCode);
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      console.log(weatherData);
      const icon = weatherData.weather[0].icon;
      console.log(icon);
      const imageUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

      const temp = weatherData.main.temp;
      console.log(temp);

      const description = weatherData.weather[0].description;
      console.log(description);

      const windSpeed = weatherData.wind.speed;
      console.log(windSpeed);

      res.write("<p> The weather description: " + description + "</p>");
      res.write("<p> Wind speed in this region is " + windSpeed + "/<p>");
      res.write(
        "<h1>Here the Temperature in " +
          query +
          "  is " +
          temp +
          " Degree Celcius </h1>"
      );
      res.write("<img src=" + imageUrl + ">");
      res.send();

    });
  });
});

app.listen(3000, function () {
  console.log("server is running at 3000");
});
