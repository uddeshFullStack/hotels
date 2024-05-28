const express=require('express')

const app=express();

const db=require('./db')

const bodyParser=require('body-parser')


const personRoutes=require('./routes/personRoutes')

const menuRoutes=require('./routes/menuRoutes')


app.use(bodyParser.json())


app.get('/',function(req,res){
    res.send("welcome tp my hotel");
})




app.use('/person',personRoutes)

app.use('/menu',menuRoutes)


app.listen(3000,()=>{
    console.log("listening on port 3000");
})

app.get('/hello',function(req,res){
    res.send("hello world how are you??");
})