const express = require("express");
const router = express.Router();
const Customer = require("../model/customer");
const Transaction = require("../model/payment")
router.post("/create", async function (req, res){
try{
    const customer = await new Customer({
        customerName : req.body.customerName,
        phoneNumber  : req.body.phoneNumber, 
        isMember : true,
        age : req.body.age,
        currSlotId: req.body.slotId,
        slotToUpdate : { newId :req.body.slotId,
                  fromDate : Date.now()
        }
    }).save();
    res.json({ans : 'customer Added'})
    }
catch(err)
{
  console.log(err);
}    
})

router.get("/:id", async function(req, res)
{
  try{
    const customer = await Customer.findById(req.params.id);
    res.json(customer);
  }  
  catch(err){
    console.log(err);
  }
})

router.get("/", async function(req, res){
    try{
        const customer = await Customer.find();
        customer.forEach(customer=>{
          if(Date.now()>=customer.slotToUpdate.fromDate && customer.slotToUpdate.newId != customer.currSlotId)
          {
            customer.currSlotId = customer.slotToUpdate.newId
          
          customer.save();}
        })
        res.json(customer);
      }  
      catch(err){
        console.log(err);
      }
})

router.post("/payment", async function(req, res){
    try{
        const transaction = await new Transaction({dateofpayment:Date.parse(req.params.dateofpayment), customer:req.body.id }).save()
    }
    catch(err){
        console.log(err);
    }
})

router.put("/setSlot", async function(req, res){
       try{
        const cus = await Customer.findById(req.body.id)
        if(cus.currSlotId===-1){
          cus.currSlotId=req.body.slotToSet
          cus.save()
        }
        else{
        cus.slotToUpdate.newId=req.body.slotToSet
        cus.slotToUpdate.fromDate - Date.parse(req.body.date)
        cus.save()
        }
      }
      catch(err){console.log(err)}
})

router.get("/getSlot", async function(req, res){
  try{
    const customer = await Customer.findById(req.params.id)
    if(Date.now()>=customer.slotToUpdate.fromDate && customer.slotToUpdate.newId != customer.currSlotId)
    {
      customer.currSlotId = customer.slotToUpdate.newId
    
    customer.save();}
    res.json({slot : customer.currSlotId})
  }
  catch(err){console.log(err)}
  } )
  module.exports = router

