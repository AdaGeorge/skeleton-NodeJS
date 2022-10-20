const categoriesControlers = require("./categories.controllers");

const getAllCategories = (req, res) => {
  categoriesControlers
    .getAllCategories()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const getCategory = (req, res) => {
  const id = Number(req.params.id);
  categoriesControlers
    .getCategoryById(id)
    .then((response) => {
      if (response) {
        res.status(200).json(response);
      } else {
        res.status(404).json({ message: "Invalid ID" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const postCategory = (req, res) => {
  const { name } = req.body;
  if (name) {
    categoriesControlers
      .createCategory(name)
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  } else {
    res.status(400).json({ message: "Missing data" });
  }
};

module.exports = {
  getAllCategories,
  getCategory,
  postCategory,
};
