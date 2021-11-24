const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const config = require("./config");
const router_admin_v1 = require("./router/router_admin_v1");

const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Set EJS as templating engine
app.set("view engine", "ejs");

// route
router_admin_v1.set(app);

//Database connection
const db = require("./db");
db.sync()
  .then(() => {
    console.log("DB Connection successful.");
  })
  .catch((error) => {
    console.log(error);
  });

// simple route

app.get("/", (req, res) => {
  // res.json({ message: "node js server start." });
  res.render("index.ejs");
});

// app.use(express.static(path.join(__dirname,'./public')));

app.get("/login", function (req, res) {
  // res.sendFile(path.join(__dirname,'./public/index.ejs'));
  res.render("index.ejs");
});

app.get("/dashboard", function (req, res) {
  console.log("login data", req.app.get("loginData"));
  // res.sendFile(path.join(__dirname,'./public/dashboard.ejs'));
  res.render("dashboard.ejs", req.app.get("loginData"));
});

app.get("/edit", function (req, res) {
  console.log("login data", req.app.get("leaveData"));
  res.render("edit.ejs", req.app.get("leaveData"));
});

// app.get('/employee', function(req,res){
//     res.sendFile(path.join(__dirname,'./public/employee.html'));
// });

// app.get('/leave-apply', function(req,res){
//     res.sendFile(path.join(__dirname,'./public/leave.html'));
// });

// set port, listen for requests
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
