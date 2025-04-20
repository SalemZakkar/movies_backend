const express = require("express");

const app = express();

const moviesRouter = require("./src/Routes/movies_route");

app.use(express.json());

app.use("/api/movies", moviesRouter);



module.exports = app;
