
const mongoose=require('mongoose');

//const mongoURL= "mongodb://localhost:27017/hotels"
const mongoURL = "mongodb://127.0.0.1:27017/hotels"; // Use 127.0.0.1 instead of localhost


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