const router = require("express").Router();
const { Rent, Category, Product, Transaction, User } = require("../../models");

// get all rent


// get rent by id


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


// delete a rent




module.exports = router;
