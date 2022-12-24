const express = require("express");

const mongoose = require("mongoose");

//routes for notes
const noteRoutes = require("./routes/notes");

//add the env variables
require("dotenv").config();

// express app
const app = express();

//middleware
app.use(express.json());

//use routes from the noteRoutes variable
app.use("/api/notes", noteRoutes);

//connect to mongodb
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
