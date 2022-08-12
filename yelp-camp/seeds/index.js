//deletes in databases and replaces it with new campgrounds. basic seed setup. 

const mongoose = require('mongoose');
const Campground = require('../models/campground');
const cities = require('./cities');

//imported from seedHelper.js 
const {places, descriptors} = require('./seedHelpers');

//use this database 
mongoose.connect('mongodb://localhost:27017/yelp-camp', {
});

//message to ensure database is connected
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected!");
})

const sample = (array) => array[Math.floor(Math.random() * array.length)];

//delete everything, then make new campgrounds
//seed 50 new campgrounds into database 
const seedDB = async() => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground ({
            author: '62f1aee3c404733aaaa7e2dd', 
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,

            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum enim quia, dolor odio perferendis dignissimos tenetur, cumque omnis voluptatibus aperiam ex totam reiciendis exercitationem perspiciatis. Perferendis quidem delectus officiis eos.',
            price,
            images: [
                {
                    url: 'https://res.cloudinary.com/douqbebwk/image/upload/v1600060601/YelpCamp/ahfnenvca4tha00h2ubt.png',
                    filename: 'YelpCamp/ahfnenvca4tha00h2ubt'
                },
                {
                    url: 'https://res.cloudinary.com/douqbebwk/image/upload/v1600060601/YelpCamp/ruyoaxgf72nzpi4y6cdi.png',
                    filename: 'YelpCamp/ruyoaxgf72nzpi4y6cdi'
                }
            ]
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
});