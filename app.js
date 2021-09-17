const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const https = require("https");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.listen(3000, function(){
  console.log("Server is Running!");
});

app.get("/",function(req,res){
  res.sendFile(__dirname+"/signup.html");
});

app.post("/",function(req,res){
  var firstName = req.body.fname;
  var lastName = req.body.lname;
  var email = req.body.email;
  console.log(firstName, lastName, email);
});
