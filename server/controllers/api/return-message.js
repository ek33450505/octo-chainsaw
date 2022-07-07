const router = require('express').Router();
const { ReturnMessage } = require('../../models');
// const withAuth = require('../../utils/auth');

// Get all messages 
router.get('/', (req, res) => {
    ReturnMessage.findAll({
      attributes: [
        'id',
        'sendMessage_id',
        'return_message_text',
        'renter_id',
        'leaser_id'
      ]
    })
      .then(dbReturnMessagetData => res.json(dbReturnMessagetData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  // Create a message to be sent
  router.post('/', (req, res) => {
    ReturnMessage.create({
      return_message_text: req.body.return_message_text,
      sendMessage_id: req.body.sendMessage_id,
      renter_id: req.session.renter_id,
      leaser_id: req.body.leaser_id
    })
      .then(dbReturnMessagetData => res.json(dbReturnMessagetData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  });
  
  // Edit Message
  router.put('/:id', (req, res) => {});
  
  // Delete message
  router.delete('/:id', (req, res) => {
    ReturnMessage.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbReturnMessagetData => {
        if (!dbReturnMessagetData) {
          res.status(404).json({ message: 'No message found with this id!' });
          return;
        }
        res.json(dbReturnMessagetData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  

module.exports = router;