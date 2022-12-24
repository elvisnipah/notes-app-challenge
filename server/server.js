//add the env variables
require("dotenv").config();

const express = require("express");

// express app
const app = express();

//routes
app.get("/", (req, res) => {
  res.json({
    msg: "Welcome to the app",
  });
});

//listen for requests using the env variable 'PORT'
app.listen(process.env.PORT, () => {
  console.log("listening on port", process.env.PORT);
});
