const mongoose=require('mongoose');

const menuItemsSchema=new mongoose.Schema({
    menuName:{
        type:String,
        require:true,
    },
    taste:{
        type:String,
        enum:['sweet','spicy','sour','salty'],
        require:true,
    },
    ingredients:{
        type:[String],
        require:true,
    },
    is_drink:{
        type:Boolean,
        default:false,
    },
    num_sales:{
        type:Number,
        default:0,
    }
})



const Menu=mongoose.model('Menu',menuItemsSchema);

module.exports=Menu;