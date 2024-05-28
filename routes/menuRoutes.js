const express= require('express')

const router=express.Router();

const Menu=require('../models/menu')




router.get('/',async (req,res)=>{
    try{
        const data=await Menu.find();
        console.log('data fetch successfully');
        res.status(200).json(data)

    }catch(err){
        console.log(err);
        res.status(500).json({error:'internal error'})
    }

})

router.get('/:taste',async (req,res)=>{
    try{
        const taste=req.params.taste;

        if(taste=='spicy' || taste=='sweet' || taste=='sour' || taste=='salty'){
            const data=await Menu.find({taste:taste});
            console.log('data fetch successfully');
            res.status(200).json(data)
        }
        else{
            res.status(404).json({error:"invalid taste type"})
        }
        

    }catch(err){
        console.log(err);
        res.status(500).json({error:'internal error'})
    }

})



router.post('/',async(req,res)=>{
    try{
        const data=req.body
        const newMenu=new Menu(data);
        const savedMenu=await newMenu.save();
        console.log('data save successfully');
        res.status(200).json(savedMenu)
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal error'})
    }

})


module.exports=router;