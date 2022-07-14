const router = require("express").Router();
const { User, Category, Product, Rent, Transaction } = require("../../models");
const { withAuth, signToken } = require('../../utils/auth');

// get all users
router.get("/", (req, res) => {
  User.findAll({
    attributes: { exclude: ["password"] }
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get one user
router.get("/:id", withAuth, (req, res) => {
  User.findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        attributes: ["id", "name", "description", "price"],
        include: {
          model: Category,
          attributes: ["name"]
        }
      }
      // {
      //   model: Rent,
      //   attributes: ["id", "leaser_id", "trxn_id", "product_id", "start_date"],
      //   include: {
      //     as: 'rents',
      //     model: Transaction,
      //     attributes: ["id", "amount", "notes"]
      //   }
      // }
    ]
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create a new user
router.post("/", (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    zip: req.body.zip
  })
    .then(dbUserData => {
      const token = signToken(dbUserData);
      res.json({ token, user: dbUserData });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

// login route
router.post("/login", (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({ message: "No user with that email address!" });
      return;
    }
    // verify user
    const validPassword = dbUserData.checkPassword(req.body.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Incorrect password!" });
    }

    const token = signToken(dbUserData);
    res.json({ token, user: dbUserData });
  });
});

// logout route
router.post("/logout", withAuth, (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});

// update a user's info
router.put("/:id", withAuth, (req, res) => {
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete a user
router.delete("/:id", withAuth, (req, res) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;