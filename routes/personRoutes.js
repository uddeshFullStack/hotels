const express= require('express')
const router=express.Router();

const Person=require('./../models/persons')


router.post('/',async(req,res)=>{
    try{
        const data=req.body
        const newPerson=new Person(data);
        const savedPerson=await newPerson.save();
        console.log('data save successfully');
        res.status(200).json(savedPerson)
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal error'})
    }

})
router.get('/',async (req,res)=>{
    try{
        const data= await Person.find();
        console.log('data fetch successfully');
        res.status(200).json(data)

    }catch(err){
        console.log(err);
        res.status(500).json({error:'internal error'})

    }
})

router.get('/:worktype',async (req,res)=>{
    try{
        const work=req.params.worktype;
        if(work == 'chef' || work=='manager' || work=='waiter'){
            const data= await Person.find({Work: work});
            console.log('data fetch successfully');
            res.status(200).json(data)
        }else{
            res.status(404).json({error:"invalid work type"})
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error:'internal error'})
    }
})

router.put('/:id',async(req,res)=>{
    try{
        const personId=req.params.id;
        const updatePersonData=req.body;

        const response = await Person.findByIdAndUpdate(personId,updatePersonData,{
            new :true,
            runValidators:true,
        })
        if(!response){
            return res.status(404).json({error:"not found"})
        }

        console.log("data updated");
        res.status(200).json({response})

    }catch(err){
        console.log(err);
        res.status(500).json({error:'internal error'})
    }

})

router.delete('/:id',async(req,res)=>{
    try{
        const personId=req.params.id;
        const response=await Person.findByIdAndDelete(personId)

        if(!response){
            return res.status(404).json({error:"not found"})
        }

        console.log("data deleted");
        res.status(200).json({message:"deleted successfully"})
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal error'})
    }
})




module.exports=router;