const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema


const botSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        trim:true,
    },
    type:{
        type: String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },

    like: {
        type: Number,
        default:0
    },

    dislike: {
        type: Number,
        default:0
    },
    link:{
        type:String,
    }
}
)
    
 

module.exports = mongoose.model("Bot", botSchema)