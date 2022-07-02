const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true 
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
        },
        password: {
            type: String,
            required: true,
            minlength: 7
          },
        conversations: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Conversation'
            }
        ],
        products: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Product'
            }
        ],
        transactions: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Transaction'
            }
        ]
    }
)

const User = model('User', userSchema);

module.exports = User;