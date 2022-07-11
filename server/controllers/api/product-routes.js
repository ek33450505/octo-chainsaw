const router = require("express").Router();
const multer = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname)

  }
})
const upload = multer({ storage: storage })
const { Category, Product, User } = require("../../models");
const withAuth = require('../../utils/auth');

// get all products
router.get("/", (req, res) => {
  Product.findAll({
    attributes: ["id", 'category_id', "name", "description", "image_url", "state", "price"],
    include: [
      {
        model: Category,
        attributes: ["name"]
      }
    ]
  })
    .then((dbProductData) => res.json(dbProductData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get one product
router.get("/:id", (req, res) => {
  Product.findOne({
    where: {
      id: req.params.id
    },
    attributes: ["id", "name", "description", "image_url", "state", "price"],
    include: [
      {
        model: User,
        attributes: ["id", "username", "zip"]
      }
    ],
  })
    .then((dbProductData) => {
      if (!dbProductData) {
        res.status(404).json({ message: "No product found with this id" });
        return;
      }
      res.json(dbProductData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create a product (add a listing)
router.post("/", upload.single('productImage'), (req, res) => {
  Product.create({
    category_id: req.body.category_id,
    user_id: req.body.user_id,  // change to session id eventually
    name: req.body.name,
    description: req.body.description,
    image_url: req.file.path,
    price: req.body.price
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

// update a product's info
router.put("/:id", (req, res) => {
  Product.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbProductData => {
      if (!dbProductData[0]) {
        res.status(404).json({ message: "No product found with this id" });
        return;
      }
      res.json(dbProductData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete a product
router.delete('/:id', (req, res) => {
  Product.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbProductData => {
      if (!dbProductData) {
        res.status(404).json({ message: 'No product found with this id!' });
        return;
      }
      res.json(dbProductData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;