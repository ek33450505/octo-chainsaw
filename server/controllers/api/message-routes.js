const router = require('express').Router();
const { Message } = require('../../models');
// const withAuth = require('../../utils/auth');

// Get all messages 
router.get('/', (req, res) => {
    Message.findAll({
      attributes: [
        'message_id',
        'message_text',
        'author_id',
        'recipiant_id',
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
  router.post('/', (req, res) => {
    Message.create({
      message_text: req.body.message_text,
      author_id: req.session.author_id,
      recipiant_id: req.body.recipiant_id,
      product_id: req.body.product_id
    })
      .then(dbMessagetData => res.json(dbMessagetData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  });
  
  // Edit Message
  router.put('/:id', (req, res) => {});
  
  // Delete message
  router.delete('/:id', (req, res) => {
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