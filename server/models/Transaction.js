const { Schema, model } = require('mongoose');

const transactionSchema = new Schema(
    {
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        renter: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    }
)