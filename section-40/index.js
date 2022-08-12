const express = require('express');
const app = express();
const morgan = require('morgan');

//use morgan with app.use
app.use(morgan('tiny'))
app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
})

//using next parameter - pushes onto the next middleware 
app.use('/dogs', (req, res, next) => {
    console.log("I LOVE DOGS!!")
    next();
})

//querying using middleware 
const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'chicken') {
        next(); 
    }
    res.send('SORRY YOU NEED A PASSWORD!');
}
// //using next parameter to call the next middleware 
// app.use((req, res, next) => {
//     console.log('THIS IS MY FIRST MIDDLEWARE')
//     return next();
//     console.log('THIS IS MY FIRST MIDDLEWARE - AFTER NEXT()')
// })
// app.use((req, res, next) => {
//     console.log('THIS IS MY SECOND MIDDLEWARE')
//     return next();
// })

//basic route handlers 
app.get('/', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('HOME PAGE')
})

app.get('/dogs', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('WOOF WOOF!')
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send('MY SECRET IS: Sometimes I wear headphones in public to not to anyone.')
})

app.use((req, res) => {
    res.status(404).send('NOT FOUND!')
})

app.listen(3000, () => {
    console.log('App is running on localhost:3000')
})