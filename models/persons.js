
const mongoose=require('mongoose');
const personSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    Age:{
        type:Number
    },
    Work:{
        type:String,
        enum:['chef','waiter','manager'],
        required:true,
    },
    Mobile:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
    },
    Address:{
        type:String
    },
    Salary:{
        type:Number,
        required:true,
    },
});


const Person=mongoose.model('Person',personSchema);

module.exports=Person;