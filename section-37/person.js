const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })

//new schema
const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

//giving virtual property = so creates a new method, ex: .fullName 
//this function retrieves first and last name 
personSchema.virtual('fullName').get(function () {
    return `${this.first} ${this.last}`
})

//middleware example - runs before save 
personSchema.pre('save', async function () {
    this.first = 'YO';
    this.last = 'MAMA';
    console.log("ABOUT TO SAVE!!!!")
})

//middleware example - runs after save 
personSchema.post('save', async function () {
    console.log("JUST SAVED!!!!")
})

//person model 
const Person = mongoose.model('Person', personSchema);


