const router = require('express').Router();
const { SendMessage } = require('../../models');
// const withAuth = require('../../utils/auth');

// Get all messages 
router.get('/', (req, res) => {
    SendMessage.findAll({
      attributes: [
        'id',
        'send_message_text',
        'renter_id',
        'leaser_id',
        'product_id'
      ]
    })
      .then(dbSendMessagetData => res.json(dbSendMessagetData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  // Create a message to be sent
  router.post('/', (req, res) => {
    SendMessage.create({
      send_message_text: req.body.send_message_text,
      renter_id: req.session.renter_id,
      leaser_id: req.body.leaser_id,
      product_id: req.body.product_id
    })
      .then(dbSendMessagetData => res.json(dbSendMessagetData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  });
  
  // Edit Message
  router.put('/:id', (req, res) => {});
  
  // Delete message
  router.delete('/:id', (req, res) => {
    SendMessage.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbSendMessagetData => {
        if (!dbSendMessagetData) {
          res.status(404).json({ message: 'No message found with this id!' });
          return;
        }
        res.json(dbSendMessagetData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  

module.exports = router;