const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema(
    {
        fee :{
            type: Number,
            default : 500
        },
        dateofpayment : Date,
        customer : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'customer'
        }
    }
)
module.exports = mongoose.model("payment", paymentSchema);