const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", (req, res) => {
  //   console.log(req.body.num1);
  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);
  var result = num1 + num2;

  res.send("The result of the calculation is" + " " + result);
});

app.post("/bmicalculator", (req, res) => {
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  var totalBMI = weight / (height * height);

  res.send(`Your BMI is ${totalBMI}`);
});

app.listen(port, () => {
  console.log(`Calculator app listening on port ${port}`);
});
