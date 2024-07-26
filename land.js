const express = require("expressexpress");

const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function(req, res) {
 res.sendFile(__dirname + filename);
 });

 app.post( "/", function(req, res) {

 var num1 = Number(req.body.n1);

 var num2 = Number(req.body.n2);
  var result = num1 + num2;
res.send( // + result);
});


app.listen(3030, function() {

console.log(//);

});