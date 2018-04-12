const mongoose = require ('mongoose');
const schema = mongoose.Schema;

//Create a Schema
const complaintSchema = new schema({

    title:{
        type:String,
        required: true,
        minlength: 5
    },
    typeComplaint:{
        type:String,
        required:true,
        minlength:3
    },
    product:{
        type:String,
        required:true,
        minlength:3
    },
    description:{
        type: String,
        required:true,
        trim:true
    }
    
})

module.exports=complaint;