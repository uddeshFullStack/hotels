
const mongoose=require('mongoose');

require('dotenv').config();

//const mongoURL= "mongodb://localhost:27017/hotels"
const mongoURL = process.env.mongoDB_URL; // Use 127.0.0.1 instead of localhost


mongoose.connect(mongoURL)


const db=mongoose.connection;

db.on('connected',()=>{
    console.log('connected to mongo server');
})
db.on('error',(err)=>{
    console.log('Errror',err);
})
db.on('disconnected',()=>{
    console.log('disconnected to mongo server');
})

module.exports=db