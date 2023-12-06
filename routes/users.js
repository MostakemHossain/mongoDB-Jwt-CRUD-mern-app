const express = require("express");
const router= express.Router();
const User= require("../api/models/User");
router.get('/', async(req,res)=>{
    try{
        const users= await User.find({});
        res.status(200).send(users);

    }catch(err){
        res.status(500).json({
            message:"Error "+ err.message,
        })
    }

})

module.exports=router;