const router = require("express").Router();
const { Category, Product, User } = require("../../models");

// get all products
router.get("/", (req, res) => {
  Product.findAll({
    attributes: ["id", 'category_id', "name", "description", "image", "state", "price"]
  })
    .then((dbProductData) => res.json(dbProductData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;