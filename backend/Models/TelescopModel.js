const mongoose = require('mongoose')
const TelescopSchema = new mongoose.Schema({

    name : {
        type : String,
        required : [true,'the telescop name is required'],
        unique:true,
        trim:true,
    },
 
    quantity:{
        type:Number,
        default:0
    },


    price :{
        type :Number,
        required : [true,"a telescop should have a price"]
    },

    images:String,

    deleted :{
        type : Boolean,
        select:false,
        default : false,
    },
},
)

const Telescop = mongoose.model("Telescop",TelescopSchema);
module.exports = Telescop;