const mongoose = require("mongoose");

const {Schema} =mongoose;

// create a Schema
const UserSchema= new Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        minlength:3,

    },
    email:{
        type:String,
        trim:true,
        required:true,
       

    },
    jobTitle:
    {
        type:String,
        trim:true,
        required:true,
       

    },
    company:{
        type:String,
        trim:true,
        required:true,
      
    },
    role:{
        type:String,
        enum:['user','admin'],
        
    }
})

// create a model
const User= mongoose.model('User',UserSchema);
module.exports= User;

