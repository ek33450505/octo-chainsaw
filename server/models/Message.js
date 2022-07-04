const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const messageSchema = new Schema(
    {
        sender: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        receiver: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        messageText: {
            type: String,
            required: 'You must type a message',
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
          },
        conversation: {
            type: Schema.Types.ObjectId,
            ref: 'Conversation'
        }
    }
)

const Message = model('Message', messageSchema);
module.exports = Message;