const router = require("express").Router();
const { Category, Product, User } = require("../../models");

// get all categories
router.get("/", (req, res) => {
  Category.findAll({
    attributes: ["id", "name", "description"]
  })
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get one category
router.get("/:id", (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    attributes: ["id", "name", "description"],
    include: [
      {
        model: Product,
        attributes: ["id", "name", "description", "image_url", "state", "price"],
        include: {
          model: User,
          attributes: ["username", "zip"]
        }
      }
    ],
  })
    .then((dbCategoryData) => {
      if (!dbCategoryData) {
        res.status(404).json({ message: "No category found with this id" });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;