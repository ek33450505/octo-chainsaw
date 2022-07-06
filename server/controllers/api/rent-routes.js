const router = require("express").Router();
const { Rent } = require("../../models");

// get all rent
router.get("/", (req, res) => {
    Rent.findAll({
    })
      .then(dbRentData => res.json(dbRentData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

//get one rent
router.get("/:id", (req, res) => {
    Rent.findOne({
      where: {
        id: req.params.id
      },
    })
      .then(dbRentData => {
        if (!dbRentData) {
          res.status(404).json({ message: "No rent found with this id" });
          return;
        }
        res.json(dbRentData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
// create a rent
router.post("/", (req, res) => {
    Rent.create({
      amount: req.body.amount,
      notes: req.body.notes
    })
      .then(dbRentData => {
        req.session.save(() => {
          req.session.id = dbRentData.id;
          req.session.renter_id = dbRentData.renter_id;
          req.session.leaser_id = dbRentData.leaser_id;
          req.session.trxn_id = dbRentData.trxn_id;
          req.session.product_id = dbRentData.product_id;
          req.session.start_date = dbRentData.start_date;
          req.session.end_date = dbRentData.end_date;
          req.session.notes = dbRentData.notes;
        //   req.session.loggedIn = true;
          
          res.json(dbRentData);
        });
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  });

// update a rent
router.put("/:id", (req, res) => {
    Rent.update(req.body, {
      individualHooks: true,
      where: {
        id: req.params.id
      }
    })
      .then(dbRentData => {
        if (!dbRentData[0]) {
          res.status(404).json({ message: "No rent found with this id" });
          return;
        }
        res.json(dbRentData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  // delete a rent
  router.delete("/:id", (req, res) => {
    Rent.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbRentData => {
        if (!dbRentData) {
          res.status(404).json({ message: "No rent found with this id" });
          return;
        }
        res.json(dbRentData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;
