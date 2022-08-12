const express = require('express');
const router = express.Router();

//middleware "?isAdmin"
//router.use - will be specific to this file only. only admin related will need ?isAdmin=true
router.use((req, res, next) => {
    if (req.query.isAdmin) {
        return next();
    }
    return res.send("SORRY NOT AN ADMIN!")
})

router.get('/topsecret', (req, res) => {
    res.send('THIS IS TOP SECRET')
})

router.get('/deleteeverything', (req, res) => {
    res.send('OKAY DELETED EVERYTHING')
})

module.exports = router;