const mongoose = require('mongoose')
const Schema = mongoose.Schema

const serviceSchema = new Schema({
    service: {
        type: String,
        required: true
    },
    
    quote:{
        type: Number,
        required: true
    },
    workArea: {
        type: String,
        required: true
    },
    image: String,
})

module.exports = mongoose.model('Service', serviceSchema)