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
    for (let i = 0; i < 300; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground ({
            author: '62f1aee3c404733aaaa7e2dd', 
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum enim quia, dolor odio perferendis dignissimos tenetur, cumque omnis voluptatibus aperiam ex totam reiciendis exercitationem perspiciatis. Perferendis quidem delectus officiis eos.',
            price,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude,
                ]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/tang-incorp/image/upload/v1660370069/YelpCamp/peuh4fpzmssrcjfzwsbf.jpg',
                    filename: 'YelpCamp/peuh4fpzmssrcjfzwsbf'
                },
                {
                    url: 'https://res.cloudinary.com/tang-incorp/image/upload/v1660370069/YelpCamp/lpwbxyy5ucbf7dhqipuh.jpg',
                    filename: 'YelpCamp/lpwbxyy5ucbf7dhqipuh'
                }
            ]
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
});