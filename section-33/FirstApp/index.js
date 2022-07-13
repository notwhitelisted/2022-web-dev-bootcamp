// This download does not include the node_modules folder
// REMEMBER TO RUN "npm install" first, to tell NPM to download the needed packages
const express = require("express");
const app = express();

// app.use((req, res) => {
//     console.log("WE GOT A NEW REQUEST!!")
//     res.send('<h1>This is my webpage!</h1>')
// })


//DIFFERENT ROUTES 

app.get('/', (req, res) => { //homepage with just the '/' only
    res.send('Welcome to the home page!!!!!!')
})

//new path variable - when you go to /r/saklsdfja in the url. it will run the res.send below 
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})

//another path variable - so when you go to /r/asdahjskdljfa in the URL. it will run the res.send below
app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`)
})


//IF RUN ON POSTMAN, IT WON't WORK WITH GET HEADERS. MUST SWITCH TO POST HEADER

app.post('/cats', (req, res) => {
    res.send('POST REQUEST TO /cats!!!! THIS IS DIFFERENT THAN A GET REQUEST!')
})

app.get('/cats', (req, res) => {
    res.send('MEOW!!')
})

app.get('/dogs', (req, res) => {
    res.send('WOOF!')
})

//for .search - .querying whatever it is you're looking for 
app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send('NOTHING FOUND IF NOTHING SEARCHED!')
    } else {
        res.send(`<h1>Search results for: ${q}</h1>`)
    }
})

//ASTERISK REFERS TO ALL

app.get('*', (req, res) => {
    res.send(`I don't know that path!`)
})




// /cats => 'meow'
// /dogs => 'woof'
// '/' 



app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080")
})
