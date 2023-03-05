require("dotenv").config();

const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const booksRoute = require("./src/routes/books");
const membersRoute = require("./src/routes/members");
const instructorsRoute = require("./src/routes/instructors");
const loger = require("morgan");
const authRoute = require("./src/routes/auth");
const app = express();

const PORT = process.env.PORT || 8000;
const routes = [booksRoute, membersRoute, instructorsRoute];
app.listen(PORT, () => {
  console.log("Server running on PORT " + PORT);
});

app.use(cors());
app.use(loger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route to JWT authorization & validation
//app.use("/auth", authRoute);
// Route for Gofit API
app.use("/api", routes);
app.get("/", (req, res) => res.send("Welcome"));
app.post("/apple", (req, res) => {
  console.log(req.body);
  res.send("Hello World!");
});
