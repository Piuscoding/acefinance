const mongoose = require('mongoose');


const loanSchema = new mongoose.Schema({
    
    loan_amount: {
        type: String,
    },
    loan_category:{
        type: String,
    },
    loan_duration: {
        type: String,
    },
    loan_interest_amount:{
        type: String
    },
    loan_interest_percentage:{
        Type: String
    },
    loan_reason:{
       type: String
    },
    repayment:{
        type: String,
        default: "Loading"
     },
     payStatus:{
        type: String,
        default: "Not paid"
     },
    
    status: {
        type: String,
        default: 'pending'
    },

    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        // required: true
    }
}, {timestamps: true});

const Upgrade = mongoose.model("upgrade", loanSchema)

module.exports = Upgrade;