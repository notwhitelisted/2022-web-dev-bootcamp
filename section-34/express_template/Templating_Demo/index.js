const express = require('express');
const app = express();
const path = require('path'); //need this to join paths + different directories together 
const redditData = require('./data.json');

//static - serve multiple directories. 
//takes absolute path to the index.js file  
app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')) //setting directory to /views with it's own method, .join
//run index.js inside of views folder as opposed to Templating_Demo folder 

//HOME PAGE DIRECT
app.get('/', (req, res) => {
    res.render('home')
})
//CAT PAGE DIRECT 
app.get('/cats', (req, res) => {
    const cats = [
        'Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'
    ]
    res.render('cats', { cats })
})

//SUBREDDIT DIRECT
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit]; //entire object called data. 
    if (data) {
        res.render('subreddit', { ...data }); //data would be printed out with the different subs, posts, title, authors, imgs
    } else {
        res.render('notfound', { subreddit }) //data that isn't found 
    }
})

//RANDOM ROUTE DIRECT
app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1; //set math.random to variable, use num in random.ejs
    res.render('random', { num }) //here --> pass through information  from our root in this case all to our template 
    //where i have access to this variable 
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})