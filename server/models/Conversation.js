const { Schema, model } = require('mongoose');
const messageSchema = require('./Message');
const dateFormat = require('../utils/dateFormat');

const conversationSchema = new Schema(
    {
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
          },
          users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
          latestMessage: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
          },
          messages: [messageSchema]
    }
)

const Conversation = model('Conversation', conversationSchema);

module.exports = Conversation;