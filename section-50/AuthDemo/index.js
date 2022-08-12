const express = require('express');
const app = express();
const User = require('./models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');

//MONGO CONNECTION
mongoose.connect('mongodb://localhost:27017/loginDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

//EJS - set to folder called views with EJS files 
app.set('view engine', 'ejs');
app.set('views', 'views');

//PARSING THE REQUEST BODY THROUGH EXPRESS 
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'notagoodsecret' }))

//function to requireLogin middleware 
const requireLogin = (req, res, next) => {
    if (!req.session.user_id) {
        return res.redirect('/login')
    }
    next();
}

//./register gets redirected to here 
app.get('/', (req, res) => {
    res.send('THIS IS THE HOME PAGE')
})

//REGISTER.EJS (res.render keyword)
app.get('/register', (req, res) => {
    res.render('register')
})

//USER REGISTERING USERNAME, PW (app.post) in REGISTRATION
app.post('/register', async (req, res) => {
    const { password, username } = req.body;
    const user = new User({ username, password })
    await user.save();
    req.session.user_id = user._id;
    res.redirect('/') //needs to redirect in a app.post route 
})
 
//LOGIN.EJS (res.render keyword) 
app.get('/login', (req, res) => {
    res.render('login') 
})

//USER ENTERING USERNAME, PW (app.post) in LOGIN
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const foundUser = await User.findAndValidate(username, password);
    if (foundUser) {
        req.session.user_id = foundUser._id;
        res.redirect('/secret');
    }
    else {
        res.redirect('/login')
    }
})

app.post('/logout', (req, res) => {
    req.session.user_id = null;
    // req.session.destroy();
    res.redirect('/login');
})

//SECRET.EJS (res.render keyword)
app.get('/secret', requireLogin, (req, res) => {
    res.render('secret')
})

//INITIAL MESSAGE FOR /topsecret
app.get('/topsecret', requireLogin, (req, res) => {
    res.send("TOP SECRET!!!")
})

//LOCALHOST CONNECTION
app.listen(3000, () => {
    console.log("SERVING YOUR APP!")
})

