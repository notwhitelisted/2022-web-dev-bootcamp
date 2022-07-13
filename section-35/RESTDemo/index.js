const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override')
const { v4: uuid } = require('uuid'); //For generating ID's

//middleware - parse request form data url 
app.use(express.urlencoded({ extended: true }))

//be able to parse JSON data in request body ---> tell express to do it
app.use(express.json())

//to fake put/patch/delete requests:
app.use(methodOverride('_method'))

//view folder and EJS setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//fake database:
let comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: uuid(),
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        id: uuid(),
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]

//index - renders multiple comments 
app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
})

//new - renders a form 
app.get('/comments/new', (req, res) => {
    res.render('comments/new');
})

//create - creates new comment 
app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuid() })
    res.redirect('/comments');
})

//show - details about 1 particular comment/tab/show/post/etc
app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment })
})

//edit - renders a form to edit a comment 
app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment })
})

//update - update a particular comment 
app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const foundComment = comments.find(c => c.id === id);

    //get new text from req.body
    const newCommentText = req.body.comment;
    //update the comment with the data from req.body:
    foundComment.comment = newCommentText;
    //redirect back to index (or wherever you want)
    res.redirect('/comments');
})

//delete/destroy - removes single comment 
app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
})


//route 1: get
app.get('/tacos', (req, res) => {
    res.send("GET /tacos response")
})

//route 2: post
app.post('/tacos', (req, res) => {
    const { meat, qty } = (req.body);
    res.send(`OK, here are your ${qty} ${meat} tacos`)
})

app.listen(3000, () => {
    console.log("ON PORT 3000!")
})