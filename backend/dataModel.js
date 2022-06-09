const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    businessName: {
        type: String,
        required: true
    },
    gstNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    loanAmount: {
        type: Number,
        required: true
    },
    interestRate: {
        type: Number,
        required: true
    },
    loanTenure: {
        type: Number,
        required: true
    }
});

const LoanData = mongoose.model('LOANCOLLECTION', dataSchema);
module.exports = LoanData;