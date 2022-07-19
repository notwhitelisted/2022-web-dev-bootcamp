
//require mongoose b/c making mongoose model 
const mongoose = require('mongoose');

//creating a schema 
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        lowercase: true,
        enum: ['fruit', 'vegetable', 'dairy']
    }
})

//compiling the model 
const Product = mongoose.model('Product', productSchema);

//export and import this model elsewhere
module.exports = Product;