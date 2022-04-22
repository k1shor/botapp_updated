const mongoose = require('mongoose')


const channelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    type: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },

    like: {
        type: String,
        default:0
    },

    dislike: {
        type: String,
        default:0
    },
}
)



module.exports = mongoose.model("Channel", channelSchema)