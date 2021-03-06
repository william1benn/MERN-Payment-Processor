const express = require('express');
const router  = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');
const Customers = require('../models/Customers');
const stripe = require("stripe")("sk_test_j8s4CsAyn22jIGhbjmVG0tqh00XkCOAEFx");


//Create A Invoice Item
router.post('/InvoiceMethod/:Theid',(req, res, next) => {


stripe.invoiceItems.create({
  customer: req.params.Theid,
  amount: req.body.amount,
  currency: "usd",
  description: req.body.description,
}, function(err, invoiceItem) {
  if(invoiceItem){

    res.json("ok")

  }
  if(err){

    return res.status(400).json(err);

  }
});
})

//List All Invoice Items
router.post('/invoiceItems',(req, res, next) => {

stripe.invoiceItems.list(
  { limit: 50},
  function(error, invoiceItems) {
    if(invoiceItems){

      res.json(invoiceItems);

    }
    if(error){

      return res.status(400).json(err);

    }
  }
);
});


//Create The Invoice
router.post('/createInvoice',(req, res, next) => {
  stripe.invoices.create({
    customer: req.body.customer,
    collection_method: "send_invoice",
    days_until_due:req.body.days,


  }, function(err, invoice) {
    if(invoice){
      Customers.findOneAndUpdate({custid: invoice.customer},{

        invID:invoice.id,

    }).then(()=>{
      console.log("okay")
      res.json(invoice)
    }).catch((error)=>{
      console.log(error)
    })
    if(err){

      return res.status(400).json(err);
    }
  }

  });
})

router.get('/InvID/:theID',(req,res,next)=>{
  let ID = req.params.theID
  Customers.findOne({custid:ID})
  .then((call)=>{
    res.json(call)
  }).catch((error)=>{
    res.json(error)
  })

})

//Get Invoice From Stripe
router.get('/getInvoice/:TheId',(req,res,next)=>{
  stripe.invoices.retrieve(
    req.params.TheId,
    function(err, invoice) {
      if(invoice){

      res.json(invoice)

      }
      if(err){

      return res.status(400).json(err)

      }
    }
  );
})


//All Invoices

router.get('/allInvoices',(req, res, next) => {

stripe.invoices.list(
  { limit: 50 },
  function(err, invoices) {
if(invoices){
  res.json(invoices)
}  
if(err){
  res.json(err)
}
}
);

});

//void a invoice 
router.post('/void/:voidid',(req, res, next) => {

stripe.invoices.voidInvoice(req.params.voidid, function(error, invoice) {
  if(invoice){
    res.json(invoice)
  }
  if(error){
    res.json(error)
  }
});

});



//Invoice Sending Email

router.post('/sendInvoice/:sendid',(req, res, next) => {

stripe.invoices.sendInvoice(req.params.sendid,function(err, invoice) {
     if(invoice){
       res.json(invoice)
     }
     if(err){
       res.json(err)
     }
  
});
})


router.post("/payLink",(req,res,next)=>{
  Customers.findOneAndUpdate({custid:req.body.custid},{paymentLink: req.body.linkToPay}).then((theResponse)=>{
  res.json(theResponse)
}).catch((error)=>{
  res.json(error)
})

});



module.exports = router;
