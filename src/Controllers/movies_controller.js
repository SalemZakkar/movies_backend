const fs = require("fs");

const path = "../movies/data/movies.json";

let data = [];
data = JSON.parse(fs.readFileSync(path, "UTF-8"));

exports.getMovies = function (req, res) {
  res.status(200).json({
    total: data.length,
    data: data,
  });
};

exports.createMovie = function (req, res) {
  let id = data.length;
  data.push(Object.assign({ id: id }, req.body));
  fs.writeFileSync(path, JSON.stringify(data), () => {});
  res.status(200).json({
    message: "Added Successfully",
    data: Object.assign({ id: id }, req.body),
  });
};

exports.updateMovie = function (req, res) {
  let p = req.params.id * 1;
  let index = data.findIndex((e) => e.id === p);
  if (index == -1) {
    res.status(404).json({
      message: "NOT FOUND",
    });
  } else {
    data[index] = Object.assign({ id: data[index].id }, req.body);
    fs.writeFileSync(path, JSON.stringify(data), () => {});
    res.status(200).json({
      message: "Updated Successfully",
      data: Object.assign({ id: p }, req.body),
    });
  }
};

exports.deleteMovie = function (req, res) {
  let p = parseInt(req.params.id);
  let index = data.findIndex((e) => e.id === p);
  if (index == -1) {
    res.status(404).json({
      message: "NOT FOUND",
    });
  } else {
    data.splice(index, 1);
    fs.writeFileSync(path, JSON.stringify(data), () => {});
    res.status(200).json({
      message: "Deleted Successfully",
      data: Object.assign({ id: p }, req.body),
    });
  }
};
