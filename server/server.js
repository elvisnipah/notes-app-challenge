const express = require("express");
//routes for notes
const noteRoutes = require("./routes/notes");
//add the env variables
require("dotenv").config();

// express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//use routes from the noteRoutes variable
app.use("/api/notes", noteRoutes);

//listen for requests using the env variable 'PORT'
app.listen(process.env.PORT, () => {
  console.log("listening on port", process.env.PORT);
});
