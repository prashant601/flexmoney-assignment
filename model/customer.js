const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema(
    {
        customerName : String,
        phoneNumber  : String, 
        isMember : Boolean,
        age : {
            type : Number,
            max : 65,
            min : 18
        },
        currSlotId : {type:Number,Default:-1},
        slotToUpdate : {
           newId : {type : Number},
           fromDate : {type : Date}
        }

    }
)
module.exports = mongoose.model("customer", customerSchema);