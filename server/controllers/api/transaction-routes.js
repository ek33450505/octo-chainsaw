const router = require("express").Router();
const { Rent, Category, Product, Transaction } = require("../../models");
const { withAuth } = require('../../utils/auth');

// get all transactions
router.get("/", withAuth, (req, res) => {
    Transaction.findAll({
    })
      .then(dbTransactionData => res.json(dbTransactionData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

//get one transaction
router.get("/:id", withAuth, (req, res) => {
    Transaction.findOne({
      where: {
        id: req.params.id
      },
    })
      .then(dbTransactionData => {
        if (!dbTransactionData) {
          res.status(404).json({ message: "No transaction found with this id" });
          return;
        }
        res.json(dbTransactionData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
// create transaction
router.post("/", withAuth, (req, res) => {
    Transaction.create({
      amount: req.body.amount,
      notes: req.body.notes
    })
      .then(dbTransactionData => {
        req.session.save(() => {
          req.session.transaction_id = dbTransactionData.id;
          req.session.amount = dbTransactionData.amount;
          req.session.notes = dbTransactionData.notes;
        //   req.session.loggedIn = true;
          
          res.json(dbTransactionData);
        });
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  });

// updated transaction by :id
router.put("/:id", withAuth, (req, res) => {
    Transaction.update(req.body, {
      individualHooks: true,
      where: {
        id: req.params.id
      }
    })
      .then(dbTransactionData => {
        if (!dbTransactionData[0]) {
          res.status(404).json({ message: "No transaction found with this id" });
          return;
        }
        res.json(dbTransactionData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  // delete a transaction
  router.delete("/:id", withAuth, (req, res) => {
    Transaction.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbTransactionData => {
        if (!dbTransactionData) {
          res.status(404).json({ message: "No transaction found with this id" });
          return;
        }
        res.json(dbTransactionData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  

module.exports = router;