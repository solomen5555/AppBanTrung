const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    Ten:{
        type:String,
        required:true
    },
    Icon:{
        type:String,
    },
    Color:{
        type:String,
    }
})

exports.Category = mongoose.model('Category',categorySchema);