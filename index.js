const express = require("express");

const app = express();

const moviesRouter = require("./src/Routes/movies_route");

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.url);
  console.log(req.params)
  console.log(req.body);
  next();
});

app.use("/api/movies", moviesRouter);

module.exports = app;
