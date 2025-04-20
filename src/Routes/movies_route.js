const express = require("express")

const router = express.Router();

const controller = require("../Controllers/movies_controller.js");

router.route("/").get(controller.getMovies).post(controller.createMovie);

router
  .route('/:id')
  .put(controller.updateMovie)
  .delete(controller.deleteMovie);

module.exports = router