const router = require('express').Router();
const { Message } = require('../../models');
const { withAuth } = require('../../utils/auth');

// Get all messages 
router.get('/', withAuth, (req, res) => {
    Message.findAll({
      attributes: [
        'id',
        'message_text',
        'author_id',
        'recipient_id',
        'product_id'
      ]
    })
      .then(dbMessagetData => res.json(dbMessagetData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  // Create a message to be sent
  router.post('/', withAuth, (req, res) => {
    Message.create({
      message_text: req.body.message_text,
      // author_id: req.session.author_id,
      author_id: req.body.author_id,
      recipient_id: req.body.recipient_id,
      product_id: req.body.product_id
    })
      .then(dbMessagetData => res.json(dbMessagetData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  });
  
  // Edit Message
  router.put('/:id', withAuth, (req, res) => {});
  
  // Delete message
  router.delete('/:id', withAuth, (req, res) => {
    Message.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbMessagetData => {
        if (!dbMessagetData) {
          res.status(404).json({ message: 'No message found with this id!' });
          return;
        }
        res.json(dbMessagetData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  

module.exports = router;