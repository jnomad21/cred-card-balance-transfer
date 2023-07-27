const mongoose = require('mongoose')
const { Decimal128 } = require('mongodb')

const ccSchema = new mongoose.Schema({
    bank: {
        type: String,
        required: true
    },
    card: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['VISA', 'MASTERCARD', 'AMEX', 'DISCOVER']
    },
    balance: {
        type: Number,
        required: true
    },

    longTermAPR: {
        type: Decimal128,
        required: true,
    },
    tempAPR: {
        type: Decimal128,
        default: 0.00
    },
    tempAPRDate: {
        type: Date,
        default: () => new Date(Date.now() + 365*24*60*60*1000)
    },
    balanceTransferAPR: {
        type: Decimal128,
        default: 0.00
    },
    balanceAmountAvail: {
        type: Number,
    },
   
})

const Model = mongoose.model('CC', ccSchema);
module.exports = Model;