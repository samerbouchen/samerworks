const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const car = require('../models/car');
const carRouter = express.Router();





///  creat cars 
carRouter.post('/',expressAsyncHandler(async(req,res)=>{
    const car = await car.create(req.body);

    if(car){
        res.status(200);
        res.json(book)
    }else{
        res.status(500);
        throw new Error('car creating failed');
    }
})
 );
  module.exports = carRouter