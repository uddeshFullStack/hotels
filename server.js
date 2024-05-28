const express=require('express')

const app=express();

const db=require('./db')


require('dotenv').config();

const bodyParser=require('body-parser')



const personRoutes=require('./routes/personRoutes')

const menuRoutes=require('./routes/menuRoutes')


app.use(bodyParser.json())


app.get('/',function(req,res){
    res.send("welcome tp my hotel");
})




app.use('/person',personRoutes)

app.use('/menu',menuRoutes)

const POST=process.env.POST
app.listen(POST,()=>{
    console.log("listening on port 3000");
})

app.get('/hello',function(req,res){
    res.send("hello world how are you??");
})