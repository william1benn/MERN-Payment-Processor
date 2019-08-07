const express = require('express');
const router  = express.Router();
const Customers = require('../models/Customers');
const uploadCloud = require('../public/config/cloudinary.js');
const stripe = require("stripe")("sk_test_j8s4CsAyn22jIGhbjmVG0tqh00XkCOAEFx");
const axios = require('axios');


// router.post('/pdf/add', uploadCloud.single('photo'), (req, res, next) => {
//   const imgPath = req.file.url;
//   const imgName = req.file.originalname;
//   const Customers = new Customer({imgPath, imgName})
//   newCustomer.save()
//   .then(movie => {
//     res.redirect('/');
//   })
//   .catch(error => {
//     console.log(error);
//   })
// });



router.post('/download',(req,res,next)=>{
let headers = {'Content-Disposition': "attachment;filename=report.xls",
                "Content-Type": "application/octet-stream"}
  let file = req.body.files
  console.log(file)
  let x = file.toString()
  axios.get(x,headers).then((call)=>{
   res.json(call.data)
  }).catch((error)=>{
    console.log(error)
  })
});

module.exports = router;
